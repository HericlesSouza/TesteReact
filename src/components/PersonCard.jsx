const PersonCard = ({ nameUser, ageUser, studentUser }) => {
    
  return (
    <div className="UserCard">
      <span>
        <p>Olá, {nameUser}</p>
        <p>Sua idade é {ageUser} anos.</p>
        <p>Estudante: {studentUser}</p>
      </span>
    </div>
  );
};
export default PersonCard;
