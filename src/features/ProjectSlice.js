import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:9000/letswork";

// Async thunk for creating a project
export const createProject = createAsyncThunk(
  "projects/createProject",
  async (projectData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token; // Get token from Redux state
      console.log("Token:", token);

      const response = await axios.post(
        `${BASE_URL}/project/add/data`,
        projectData,
        {
          headers: { Authorization: `${token}` }, // Add token to headers
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error creating project:", error);
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to create project"
      );
    }
  }
);

// Async thunk for populating a user
export const populateUser = createAsyncThunk(
  "projects/populateUser",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token; // Get token from Redux state
      console.log("Token:", token);

      const response = await axios.get(
        `${BASE_URL}/user/api/user/fetch/${id}`,
        {
          headers: { Authorization: `${token}` }, // Add token to headers
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch user"
      );
    }
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [], // List of all projects
    currentProject: null,
    status: "idle",
    error: null,
    user: null,
  },
  reducers: {
    setInfo: (state, action) => {
      state.user = action.payload.info;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create project
      .addCase(createProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.projects.push(action.payload);
      })
      .addCase(createProject.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Populate User
      .addCase(populateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(populateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;

        // Save user data to localStorage
        localStorage.setItem("info", JSON.stringify(action.payload.user));
      })
      .addCase(populateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setInfo } = projectSlice.actions;
export default projectSlice.reducer;
