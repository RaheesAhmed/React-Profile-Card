import React from 'react';
import './ProfileCard.css';
import image1 from './pic.jpg';
const ProfileCard = () => {
	return (
		<div>
			<div className="profile-card">
				<div className="card-header">
					<div className="pic">
						<img src={image1} alt="" />
					</div>
					<div className="name">RAHEES AHMED</div>
					<div className="desc">Developer & Designer</div>
					<div className="sm">
						<a href="#" className="fab fa-facebook-f" />
						<a href="#" className="fab fa-twitter" />
						<a href="#" className="fab fa-github" />
						<a href="#" className="fab fa-youtube" />
					</div>
					<a href="#" className="contact-btn">
						Contact Me
					</a>
				</div>
				<div className="card-footer">
					<p>This is demo data</p>
					<div className="numbers">
						<div className="item">
							<span>120</span>
							Posts
						</div>
						<div className="border" />
						<div className="item">
							<span>127</span>
							Following
						</div>
						<div className="border" />
						<div className="item">
							<span>120K</span>
							Followers
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
