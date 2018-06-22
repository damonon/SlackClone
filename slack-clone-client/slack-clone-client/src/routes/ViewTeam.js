import React from 'react';
import Sidebar from '../containers/Sidebar';
import Header from '../components/Header';
import Messages from '../components/Messages';
import AppLayout from '../components/AppLayout';
import SendMessage from '../components/SendMessage';

export default () => (
  <AppLayout>
    <Sidebar currentTeamId={1} />
    <Header channelName="general" />
    <Messages>
      <ul className="message-list">
        <li />
        <li />
      </ul>
    </Messages>
    <SendMessage channelName="general" />
  </AppLayout>

);
