'use strict'

import React from "react"

export default function accordion(Component) {
  return class WrappedComponent extends React.Component {
    state = {
      //не привязывайся к названию сущности, в декораторах должен быть общий функционал. Используй, например, openItemId 
      openArticleId: null
    }

    render() {
      return <Component {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle}/>
    }

    toggleOpenArticle = id => ev => {
      this.setState({
        openArticleId: (id != this.state.openArticleId ? id : null)
      })
    }
  }
}
