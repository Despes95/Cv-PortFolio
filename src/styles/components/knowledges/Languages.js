import React, { Component } from 'react'
import ProgressBar from './ProgressBar'

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 0.8 },
      { id: 2, value: "Css", xp: 1.2 },
      { id: 3, value: "MySQL", xp: 0.6 },
      { id: 4, value: "NodeJS", xp: 0.6 }
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.6 },
      { id: 2, value: "Bootstrap", xp: 1 },
      { id: 3, value: "Sass", xp: 1.2 },
      { id: 4, value: "Wordpress", xp: 1 },
    ],
  }


  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title='Dèveloppement'
        />

        <ProgressBar
          languages={frameworks}
          className="frameworkDisplay"
          title='Frameworks & Bibliothéques'
        />
      </div>
    )
  }
}

export default Languages;
