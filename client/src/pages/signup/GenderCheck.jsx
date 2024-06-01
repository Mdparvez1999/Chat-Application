const GenderCheck = ({ handleChange }) => {
    return (
        < div className="form-control" >
            <label className="label cursor-pointer">
                <label className="label-text text-black text-[1.2rem]">Gender : </label>
                <label className="label-text text-black text-[1.2rem]">Male</label>
                <input type="radio" name="gender" value={"male"} className="radio radio-primary" onChange={handleChange} />
                <label className="label-text text-black text-[1.2rem]">Female</label>
                <input type="radio" name="gender" value={"female"} className="radio radio-primary" onChange={handleChange} />
            </label>
        </ div>
    )
}


export default GenderCheck