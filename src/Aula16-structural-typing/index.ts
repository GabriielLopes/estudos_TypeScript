// --------------------- TIPAGEM ESTRUTURADA ---------------------

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { userName: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) =>  user.userName === sentValue.userName && user.password === sentValue.password;

const bdUser = { userName: 'pedro', password: '123456'};
const sentUser = { userName: 'pedro', password: '123456' };
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
