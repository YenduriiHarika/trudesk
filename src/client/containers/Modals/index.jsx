/*
 *       .                             .o8                     oooo
 *    .o8                             "888                     `888
 *  .o888oo oooo d8b oooo  oooo   .oooo888   .ooooo.   .oooo.o  888  oooo
 *    888   `888""8P `888  `888  d88' `888  d88' `88b d88(  "8  888 .8P'
 *    888    888      888   888  888   888  888ooo888 `"Y88b.   888888.
 *    888 .  888      888   888  888   888  888    .o o.  )88b  888 `88b.
 *    "888" d888b     `V88V"V8P' `Y8bod88P" `Y8bod8P' 8""888P' o888o o888o
 *  ========================================================================
 *  Author:     Chris Brame
 *  Updated:    2/3/19 8:28 PM
 *  Copyright (c) 2014-2019. All rights reserved.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Modals
import CreateTicketTypeModal from './CreateTicketTypeModal'
import DeleteTicketTypeModal from './DeleteTicketTypeModal'
import AddPriorityToTypeModal from './AddPriorityToTypeModal'
import CreatePriorityModal from './CreatePriorityModal'
import DeletePriorityModal from './DeletePriorityModal'
import CreateTagModal from './CreateTagModal'

const MODAL_COMPONENTS = {
  CREATE_TICKET_TYPE: CreateTicketTypeModal,
  DELETE_TICKET_TYPE: DeleteTicketTypeModal,
  ADD_PRIORITY_TO_TYPE: AddPriorityToTypeModal,
  CREATE_PRIORITY: CreatePriorityModal,
  DELETE_PRIORITY: DeletePriorityModal,
  CREATE_TAG: CreateTagModal
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return <div id={'#modal-wrap'} />
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} />
}

ModalRoot.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.object
}

export default connect(state => state.modal)(ModalRoot)