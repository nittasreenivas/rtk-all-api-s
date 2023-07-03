
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { dummyApi } from "../services/dummyApi";
import { githubApi } from "../services/githubApi";
import { photoApi } from "../services/photoApi";
import { rickyApi } from "../services/rickyApi";
import { dogApi } from "../services/dogApi";
import { fakeApi } from "../services/fakeApi";
import { countryApi } from "../services/countryApi";
import { cocktailApi } from "../services/cocktailApi";
import { platoApi } from "../services/platoApi";
import { randomApi } from "../services/randomApi";
const store = configureStore({
    reducer:{
        [dummyApi.reducerPath]: dummyApi.reducer,
        [ githubApi.reducerPath]: githubApi.reducer,
        [ photoApi.reducerPath]: photoApi.reducer,
        [  rickyApi.reducerPath]:  rickyApi.reducer,
        [  dogApi.reducerPath]:   dogApi.reducer,
        [  fakeApi.reducerPath]:  fakeApi.reducer,
        [   countryApi.reducerPath]:   countryApi.reducer,
        [ cocktailApi.reducerPath]:  cocktailApi.reducer,
        [ platoApi.reducerPath]:  platoApi.reducer,
        [ randomApi.reducerPath]: randomApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        dummyApi.middleware,
        githubApi.middleware,
        photoApi.middleware,
        rickyApi.middleware,
        dogApi.middleware,
        fakeApi.middleware,
        countryApi.middleware,
        cocktailApi.middleware,
        platoApi.middleware,
        randomApi.middleware,
        ),
})
setupListeners(store.dispatch)
export default store