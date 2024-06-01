import tryCatch from "../custom/tryCatch.js";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getRecieverSocketId, io } from "../server.js";

export const sendMessage = tryCatch(async (req, res, next) => {
    // get the message from the request body
    const { message } = req.body;

    // get the id of the currently logged in user
    const senderId = req.user._id;

    // get the id of the reciever from the params
    const { id: recieverId } = req.params;

    // find a conversation between the sender and the reciever
    let conversation = await Conversation.findOne({
        // the members array should contain both the sender's id and the reciever's id
        members: {
            $all: [senderId, recieverId]
        }
    });

    // if no conversation is found, create a new one
    if (!conversation) {
        conversation = new Conversation({
            // the members array should contain both the sender's id and the reciever's id
            members: [senderId, recieverId],
            // the messages array should be empty initially
            messages: []
        });
    };

    // create a new message object
    const newMessage = await Message.create({
        // the sender of the message is the currently logged in user
        senderId,
        // the reciever of the message is the user with the id from the params
        recieverId,
        // the message is the message from the request body
        message
    });

    // if the new message object is successfully created, add it to the messages array of the conversation
    if (newMessage) {
        conversation.messages.push(newMessage._id);
        // save the conversation to the database
        await conversation.save();
    };

    // return the new message object in the response

    // socket io implementation
    const recieverSocketId = getRecieverSocketId(recieverId);

    if (recieverSocketId) {
        io.to(recieverSocketId).emit("newMessage", newMessage);
    }

    return res.status(201).json({
        newMessage
    });
});

/**
 * This function retrieves all the messages of a conversation between two users
 * It takes the id of the user and the id of the reciever as parameters
 * First, it finds the conversation that the two users are part of
 * Then, it populates the messages array of the conversation with the actual messages
 * If the conversation is not found, it returns an empty array
 * If the messages array is empty, it also returns an empty array
 * Otherwise, it returns the messages array
 */
export const getAllMessages = tryCatch(async (req, res, next) => {
    // get the id of the currently logged in user
    const userId = req.user._id;

    // get the id of the reciever from the params
    const { id: recieverId } = req.params;

    // find the conversation that the two users are part of
    const conversation = await Conversation.findOne({
        // the members array should contain both the user's id and the reciever's id
        members: {
            $all: [userId, recieverId]
        }
    }).populate("messages"); // populate the messages array of the conversation with the actual messages

    // if the conversation is not found, return an empty array
    if (!conversation) {
        return res.status(404).json([]);
    }

    const messages = conversation.messages; // get the messages array

    // if the messages array is empty, return an empty array
    if (!messages || messages.length === 0) {
        return res.status(200).json([])
    };

    // if the messages array is not empty, return the messages array
    return res.status(200).json({
        messages
    });
});

