// import styles from '../styles/Header.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faXmark,faEye} from '@fortawesome/free-solid-svg-icons';
// import Moment from 'react-moment';
// import { Modal } from 'antd';
// import Link from 'next/link';
// import Home from '../components/Home';

// function Index() {
//   return <Header />;
// }

// export default Index;



// <div className={styles.registerContainer}>

// 				<div className={styles.registerSection}>
// 					<p>Sign-up</p>
// 					<input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
// 					<input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
// 					<button id="register" onClick={() => handleRegister()}>Register</button>
// 				</div>
// 				<div className={styles.registerSection}>
// 					<p>Sign-in</p>
// 					<input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
// 					<input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
// 					<button id="connection" onClick={() => handleConnection()}>Connect</button>
// 				</div>
// </div>

// const [isModalOpen, setIsModalOpen] = useState(false);

// const showModal = () => {
//   setIsModalOpen(true);
// };

// const handleOk = () => {
//   setIsModalOpen(false);
// };

// const handleCancel = () => {
//   setIsModalOpen(false);
// };

// return (
//   <>
//     <Button type="primary" onClick={showModal}>
//       Open Modal
//     </Button>
//     <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//       <p>Some contents...</p>
//       <p>Some contents...</p>
//       <p>Some contents...</p>
//     </Modal>
//   </>
// );