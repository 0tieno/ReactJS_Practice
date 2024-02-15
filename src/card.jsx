import profilePic1 from './assets/profile-2.jpg';

function Card(){
    return (
        <div className="card">
            <img className ="card-image" src={profilePic1} alt="profile1" />
            <h2 className='card-title'>Ronney Otieno</h2>
            <p className='card-description'>junior software engineer</p>
        </div>
    );
}

export default Card;