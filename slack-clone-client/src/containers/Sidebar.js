import React from 'react';
import Channels from '../components/Channels';
import Teams from '../components/Teams';
import AddChannelModal from '../components/AddChannelModal';
import InvitePeopleModal from '../components/InvitePeopleModal';
import DirectMessageModal from '../components/DirectMessageModal';

export default class Sidebar extends React.Component {
  state = {
    openAddChannelModal: false,
    openInvitePeopleModal: false,
    openDirectMessageModal: false,
  };

  toogleDirectMessageModal = (e) => {
    if (e) {
      e.preventDefault();
    }
    this.setState(state => ({ openDirectMessageModal: !state.openDirectMessageModal }));
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
    const { teams, team, username } = this.props;
    const { openInvitePeopleModal, openAddChannelModal, openDirectMessageModal } = this.state;

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
        isOwner={team.admin}
        users={[{ id: 1, name: 'slackbot' }, { id: 2, name: 'user1' }]}
        onAddChannelClick={this.toogleAddChannelModal}
        onInvitePeopleClick={this.toogleInvitePeopleClick}
        onDirectMessageClick={this.toogleDirectMessageModal}
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
      <DirectMessageModal
        teamId={team.id}
        onClose={this.toogleDirectMessageModal}
        open={openDirectMessageModal}
        key="sidebar-direct-message-modal"
      />,
    ];
  }
}
