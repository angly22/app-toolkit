// importamos desde redux toolkit el configure store
import { configureStore } from "@reduxjs/toolkit";
//reducers
import users from "./slices/users";

//recibe un objeto, que debe tener un reducer y esta formado por muchos reducers
export default configureStore({
    reducer: {
        users
    }
})