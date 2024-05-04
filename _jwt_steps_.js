// 1. install jsonwebtoken
// 2. jwt.sign(payload, secret,{expiresIn:})
// 3. token client
// 4. build secret=require('crypto').randomBytes(64).toString('hex')


// setup
// 1. set cookies with http only. for development secure: false,

// 2. cors
// app.use(cors({
    // origin: ["http://localhost:5173/"],
    // credentials: true
// }));


// 3. client side axios setting