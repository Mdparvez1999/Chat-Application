const GenderCheck = () => {
    return (
        < div className="form-control" >
            <label className="label cursor-pointer">
                <label className="label-text text-black text-[1.2rem]">Gender : </label>
                <label className="label-text text-black text-[1.2rem]">Male</label>
                <input type="radio" name="radio-1" className="radio radio-primary" />
                <label className="label-text text-black text-[1.2rem]">Female</label>
                <input type="radio" name="radio-1" className="radio radio-primary" />
            </label>
        </ div>
    )
}


export default GenderCheck