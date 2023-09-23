import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const channelsAdapter = createEntityAdapter();
const initialState = channelsAdapter.getInitialState();

const channelSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    addOneChannel: channelsAdapter.addOne,
    addManyChannel: channelsAdapter.addMany,
      // (state, { payload: { channel } }) => {
      // state.channels = [channel, ...state.channels];
      // },
    removeChannel: channelsAdapter.removeOne,
      // (state, { payload: { channel } }) => {
      // state.channels = state.channels.filter((el) => el.id !== channel.id);
      // },
    renameChannel: (state, { payload: { channel } }) => {
      const newState = state.channels.filter((el) => el.id !== channel.id);
      state.channels = [...newState, channel];
      },
  },
});

export const { addOneChannel, addManyChannel, removeChannel, renameChannel } = channelSlice.actions;

export default channelSlice.reducer;
