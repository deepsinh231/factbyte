import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import CONFIG from '../../Config';

let authheader = { 'Content-Type': 'application/json' };

export const Usersignin = createAsyncThunk(
    'Usersignin',

    async (userdata, thunkAPI) => {
        try {
            let result = await axios({
                method: 'GET',
                baseURL: CONFIG.BASE_URL_AUTH,
                url: `api/PortalAdmin/usersignin`,
                params: userdata,
            });
            // console.log('Usersignin result.data >>', result.data);
            return result.data;
        } catch (error) {
            console.error(
                'try catch [ Usersignin ] error.message >>',
                error.message,
            );
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    },
);
export const Panverify = createAsyncThunk(
    'Panverify',
    async (userdata, thunkAPI) => {
        console.log("userdata>>>", userdata)
        try {
            let result = await axios({
                method: 'GET',
                baseURL: CONFIG.BASE_URL_GST,
                url: `api/GST/panverify`,
                params: userdata,
            });
            console.log('Panverify result.data >>', result.data);
            if (result.data.success) {
                return result.data;
            } else {
                return thunkAPI.rejectWithValue({ error: result.data.errorMessage });
            }
        } catch (error) {
            console.log('try catch [ Panverify ] error.message >>', error.message,);
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    },
);
export const Emailverify = createAsyncThunk(
    'Emailverify',
    async (userdata, thunkAPI) => {
        console.log("userdata>>>", userdata)
        try {
            let result = await axios({
                method: 'GET',
                baseURL: CONFIG.BASE_URL_AUTH,
                url: `/api/PortalAdmin/emailverify`,
                params: userdata,
            });
            console.log('Emailverify result.data >>', result.data);
            if (result?.data?.success) {
                return result.data;
            }
            else {
                return thunkAPI.rejectWithValue({ error: result.data.errorMessage });
            }
        } catch (error) {
            console.error(
                'try catch [ Emailverify ] error.message >>',
                error.message,
            );
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    },
);
export const Gstverify = createAsyncThunk(
    'Gstverify',
    async (userdata, thunkAPI) => {
        console.log("userdata>>>", userdata)
        try {
            let result = await axios({
                method: 'GET',
                baseURL: CONFIG.BASE_URL_GST,
                url: `/api/GST/gstverify`,
                params: userdata,
            });
            console.log('Gstverify result.data >>', result.data);
            return result.data;
        } catch (error) {
            console.error(
                'try catch [ Gstverify ] error.message >>',
                error.message,
            );
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    },
);
export const SaveUser = createAsyncThunk(
    'SaveUser',
    async (userdata, thunkAPI) => {
        console.log("userdata>>>", userdata)
        try {
            let result = await axios({
                method: 'POST',
                baseURL: CONFIG.BASE_URL_AUTH,
                url: `/api/PortalAdmin/SaveUser`,
                data: userdata,
            });
            console.log('SaveUser result.data >>', result.data);
            return result.data;
        } catch (error) {
            console.error(
                'try catch [ SaveUser ] error.message >>',
                error.message,
            );
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    },
);
// -------------
export const Gstsearch = createAsyncThunk(
    'Gstsearch',
    async (userdata, thunkAPI) => {
        console.log("Gstsearch>>userdata>>>", userdata)
        try {
            let result = await axios({
                method: 'GET',
                baseURL: CONFIG.BASE_URL_GST,
                url: `/api/GST/gstsearch`,
                params: userdata,
            });
            console.log('Gstsearch result.data >>', result);
            if (result.data) {
                if (result?.data?.success) {
                    return result.data.data;
                }
                else {
                    return thunkAPI.rejectWithValue({ error: result.data.errorMessage });
                }
            }
            else {
                return thunkAPI.rejectWithValue({ error: result.data.errorMessage });
            }
        } catch (error) {
            console.log('try catch [ Gstsearch ] error.message >>', error.message,);
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    },
);
// Mobile360
export const Mobile360 = createAsyncThunk(
    'Mobile360',
    async (userdata, thunkAPI) => {
        console.log("userdata>>>", userdata)
        try {
            let result = await axios({
                method: 'GET',
                baseURL: CONFIG.BASE_URL_MOBLIE360,
                url: `api/FraudCheck/GetMobile360`,
                data: userdata,
            });
            console.log('Mobile360 result.data >>', result.data);
            return result.data;
        } catch (error) {
            console.error(
                'try catch [ Mobile360 ] error.message >>',
                error.message,
            );
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    },
);

export const TBSlice = createSlice({
    name: 'TBSlice',
    initialState: {
        isGstsearch: false,
        isGstsearchFetching: false,
        GstsearchData: {},

        isMobile360: false,
        isMobile360Fetching: false,
        Mobile360Data: {},

        isPanverify: false,
        isPanverifyFetching: false,
        PanverifyData: {},

        isGstverify: false,
        isGstverifyFetching: false,
        GstverifyData: {},


        UsersigninData: [],
        PanDetailsData: {},

        isSaveUser: false,
        isSaveUserFetching: false,


        isEmailverify: false,
        isEmailverifyFetching: false,
        EmailverifyData: {},

        isSignin: false,
        isSigninFetching: false,

        isPanDetailsFetching: false,
        isFetching: false,
        isError: false,
        errorMessage: "",
    },
    reducers: {
        updateState: (state, { payload }) => {
            state.isGstsearch = payload.isGstsearch !== undefined ? payload.isGstsearch : state.isGstsearch;
            state.isPanverify = payload.isPanverify !== undefined ? payload.isPanverify : state.isPanverify;
            state.isGstverify = payload.isGstverify !== undefined ? payload.isGstverify : state.isGstverify;

            state.isSaveUser = payload.isSaveUser !== undefined ? payload.isSaveUser : state.isSaveUser;
            state.isEmailverify = payload.isEmailverify !== undefined ? payload.isEmailverify : state.isEmailverify;
            state.isSignin = payload.isSignin !== undefined ? payload.isSignin : state.isSignin;
            state.UsersigninData = payload.UsersigninData !== undefined ? payload.UsersigninData : state.UsersigninData;

            state.isMobile360 = payload.isMobile360 !== undefined ? payload.isMobile360 : state.isMobile360;

            state.isError = payload.isError !== undefined ? payload.isError : state.isError;
            state.errorMessage = payload.errorMessage !== undefined ? payload.errorMessage : state.errorMessage;
            return state;
        },
    },
    extraReducers: builder => {
        //========= Usersignin
        builder.addCase(Usersignin.fulfilled, (state, { payload }) => {
            console.log("Usersignin>>>payload>>>", payload)
            try {
                state.UsersigninData = payload;
                state.isSignin = true;
                state.isSigninFetching = false;

                state.isError = false;
                state.errorMessage = '';
                return state;
            } catch (error) {
                console.error('Error: Usersignin.fulfilled try catch error >>', error);
            }
        });
        builder.addCase(Usersignin.rejected, (state, { payload }) => {
            try {
                state.UsersigninData = {};
                state.isSignin = false;
                state.isSigninFetching = false;
                state.isError = true;
                payload
                    ? (state.errorMessage = payload.error.message_detail
                        ? payload.error.message_detail
                        : payload.error)
                    : (state.errorMessage = 'API Response Invalid. Please Check API');
            } catch (error) {
                console.error(
                    'Error: [Usersignin.rejected] try catch error >>',
                    error,
                );
            }
        });
        builder.addCase(Usersignin.pending, state => {
            state.isSigninFetching = true;
        });

        //========= Emailverify
        builder.addCase(Emailverify.fulfilled, (state, { payload }) => {
            console.log("Emailverify>>>payload>>>", payload)
            try {
                state.EmailverifyData = payload.data;
                state.isEmailverify = true;
                state.isEmailverifyFetching = false;

                state.isError = false;
                state.errorMessage = '';
                return state;
            } catch (error) {
                console.error('Error: Emailverify.fulfilled try catch error >>', error);
            }
        });
        builder.addCase(Emailverify.rejected, (state, { payload }) => {
            try {
                state.EmailverifyData = {};
                state.isEmailverify = false;
                state.isEmailverifyFetching = false;
                state.isError = true;
                payload
                    ? (state.errorMessage = payload.error.message_detail
                        ? payload.error.message_detail
                        : payload.error)
                    : (state.errorMessage = 'API Response Invalid. Please Check API');
            } catch (error) {
                console.error(
                    'Error: [Emailverify.rejected] try catch error >>',
                    error,
                );
            }
        });
        builder.addCase(Emailverify.pending, state => {
            state.isEmailverifyFetching = true;
        });
        //========= Gstverify
        builder.addCase(Gstverify.fulfilled, (state, { payload }) => {
            console.log("Gstverify>>>payload>>>", payload)
            try {
                state.GstverifyData = payload.data;
                state.isGstverify = true;
                state.isGstverifyFetching = false;

                state.isError = false;
                state.errorMessage = '';
                return state;
            } catch (error) {
                console.error('Error: Gstverify.fulfilled try catch error >>', error);
            }
        });
        builder.addCase(Gstverify.rejected, (state, { payload }) => {
            try {
                state.GstverifyData = {};
                state.isGstverify = false;
                state.isGstverifyFetching = false;
                state.isError = true;
                payload
                    ? (state.errorMessage = payload.error.message_detail
                        ? payload.error.message_detail
                        : 'Failed to retrieve GST contact details.')
                    : (state.errorMessage = 'API Response Invalid. Please Check API');
            } catch (error) {
                console.error(
                    'Error: [Gstverify.rejected] try catch error >>',
                    error,
                );
            }
        });
        builder.addCase(Gstverify.pending, state => {
            state.isGstverifyFetching = true;
        });
        //========= SaveUser
        builder.addCase(SaveUser.fulfilled, (state, { payload }) => {
            console.log("SaveUser>>>payload>>>", payload)
            try {
                state.isSaveUser = true;
                state.isSaveUserFetching = false;

                state.isError = false;
                state.errorMessage = '';
                return state;
            } catch (error) {
                console.error('Error: SaveUser.fulfilled try catch error >>', error);
            }
        });
        builder.addCase(SaveUser.rejected, (state, { payload }) => {
            try {
                state.isSaveUser = false;
                state.isSaveUserFetching = false;
                state.isError = true;
                payload
                    ? (state.errorMessage = payload.error.message_detail
                        ? payload.error.message_detail
                        : payload.error)
                    : (state.errorMessage = 'API Response Invalid. Please Check API');
            } catch (error) {
                console.error(
                    'Error: [SaveUser.rejected] try catch error >>',
                    error,
                );
            }
        });
        builder.addCase(SaveUser.pending, state => {
            state.isSaveUserFetching = true;
        });
        //---------------
        //========= Gstsearch
        builder.addCase(Gstsearch.fulfilled, (state, { payload }) => {
            console.log("Gstsearch>>>payload>>>", payload)
            try {
                state.isGstsearch = true;
                state.GstsearchData = payload;

                state.isGstsearchFetching = false;
                state.isError = false;
                state.errorMessage = '';
                return state;
            } catch (error) {
                console.error('Error: Gstsearch.fulfilled try catch error >>', error);
            }
        });
        builder.addCase(Gstsearch.rejected, (state, { payload }) => {
            try {
                state.GstsearchData = {};
                state.isGstsearch = false;
                state.isGstsearchFetching = false;
                state.isError = true;
                payload
                    ? (state.errorMessage = payload.error.message_detail
                        ? payload.error.message_detail
                        : 'no data found')
                    : (state.errorMessage = 'API Response Invalid. Please Check API');
            } catch (error) {
                console.error(
                    'Error: [Gstsearch.rejected] try catch error >>',
                    error,
                );
            }
        });
        builder.addCase(Gstsearch.pending, state => {
            state.isGstsearchFetching = true;
        });

        //========= Moblie360
        builder.addCase(Mobile360.fulfilled, (state, { payload }) => {
            console.log("Mobile360>>>payload>>>", payload)
            try {
                state.isMobile360 = true;
                state.Mobile360Data = payload;

                state.isMobile360Fetching = false;
                state.isError = false;
                state.errorMessage = '';
                return state;
            } catch (error) {
                console.error('Error: Mobile360.fulfilled try catch error >>', error);
            }
        });
        builder.addCase(Mobile360.rejected, (state, { payload }) => {
            try {
                state.Mobile360Data = {};
                state.isMobile360 = false;
                state.isMobile360Fetching = false;
                state.isError = true;
                payload
                    ? (state.errorMessage = payload.error.message_detail
                        ? payload.error.message_detail
                        : 'no data found')
                    : (state.errorMessage = 'API Response Invalid. Please Check API');
            } catch (error) {
                console.error(
                    'Error: [Mobile360.rejected] try catch error >>',
                    error,
                );
            }
        });
        builder.addCase(Mobile360.pending, state => {
            state.isMobile360Fetching = true;
        });
        //========= Panverify
        builder.addCase(Panverify.fulfilled, (state, { payload }) => {
            // console.log("Panverify>>>payload>>>", payload)
            try {
                state.isPanverify = true;
                state.PanverifyData = payload.data;

                state.isPanverifyFetching = false;
                state.isError = false;
                state.errorMessage = '';
                return state;
            } catch (error) {
                console.error('Error: Panverify.fulfilled try catch error >>', error);
            }
        });
        builder.addCase(Panverify.rejected, (state, { payload }) => {
            console.log("[Panverify.rejected] >>>payload>>>>", payload)
            try {
                state.PanverifyData = {};
                state.isPanverify = false;

                state.isPanverifyFetching = false;
                state.isError = true;
                payload ? (state.errorMessage = payload.error?.errorMessage
                    ? payload.error?.errorMessage
                    : 'Failed to retrieve PAN details.')
                    : (state.errorMessage = 'API Response Invalid. Please Check API');
            } catch (error) {
                console.error(
                    'Error: [Panverify.rejected] try catch error >>',
                    error,
                );
            }
        });
        builder.addCase(Panverify.pending, state => {
            state.isPanverifyFetching = true;
        });

    },
});

export const { updateState } = TBSlice.actions;
export const TBSelector = state => state.main.TB;