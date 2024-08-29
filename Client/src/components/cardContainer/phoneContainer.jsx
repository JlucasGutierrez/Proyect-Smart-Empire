import PhoneCard from "../card/phoneCard";

const PhoneContainer = ({phones}) =>{
    return(
        <div className="w-60 h-96 bg-red-100">
            {phones?.map((phone) => {
                return(
                    <PhoneCard
                    key={phone.id}
                    id={phone.id}
                    name={phone.name}
                    />
                )
            })}
        </div>
    )
};

export default PhoneContainer;