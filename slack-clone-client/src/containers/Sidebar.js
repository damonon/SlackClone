import React from 'react';
import decode from 'jwt-decode';
import Channels from '../components/Channels';
import Teams from '../components/Teams';
import AddChannelModal from '../components/AddChannelModal';
import InvitePeopleModal from '../components/InvitePeopleModal';

export default class Sidebar extends React.Component {
  state = {
    openAddChannelModal: false,
    openInvitePeopleModal: false,
  }
  toogleAddChannelModal = (e) => {
    if (e) {
      e.preventDefault();
    }

    this.setState(state => ({ openAddChannelModal: !state.openAddChannelModal }));
  }
  toogleInvitePeopleClick = (e) => {
    if (e) {
      e.preventDefault();
    }
    this.setState(state => ({ openInvitePeopleModal: !state.openInvitePeopleModal }));
  }
  render() {
    const { teams, team } = this.props;
    const { openInvitePeopleModal, openAddChannelModal } = this.state;
    let username = '';
    let isOwner = false;
    try {
      const token = localStorage.getItem('token');
      const { user } = decode(token);
      // eslint-disable-next-line prefer-destructuring
      username = user.username;
      isOwner = user.id === team.owner;
    } catch (err) {}
    return [
      <Teams
        key="team-sidebar"
        teams={teams}
      />,
      <Channels
        key="channels-sidebar"
        teamName={team.name}
        username={username}
        teamId={team.id}
        channels={team.channels}
        isOwner={isOwner}
        users={[{ id: 1, name: 'slackbot' }, { id: 2, name: 'user1' }]}
        onAddChannelClick={this.toogleAddChannelModal}
        onInvitePeopleClick={this.toogleInvitePeopleClick}
      />,
      <AddChannelModal
        teamId={team.id}
        onClose={this.toogleAddChannelModal}
        open={openAddChannelModal}
        key="sidebar-add-channel-modal"
      />,
      <InvitePeopleModal
        teamId={team.id}
        onClose={this.toogleInvitePeopleClick}
        open={openInvitePeopleModal}
        key="invite-people-modal"
      />,
    ];
  }
}
