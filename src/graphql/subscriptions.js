/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill {
    onCreateSkill {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill {
    onUpdateSkill {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill {
    onDeleteSkill {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateVolunteer = /* GraphQL */ `
  subscription OnCreateVolunteer {
    onCreateVolunteer {
      id
      name
      age
      gender
      skills {
        id
        name
        createdAt
        updatedAt
      }
      registeredIn {
        id
        title
        description
        image
        ownedBy {
          id
          name
          createdAt
          updatedAt
        }
        participants {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        teams {
          id
          name
          createdAt
          updatedAt
        }
        date
        time
        period_days
        createdAt
        updatedAt
      }
      partOf {
        id
        name
        members {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVolunteer = /* GraphQL */ `
  subscription OnUpdateVolunteer {
    onUpdateVolunteer {
      id
      name
      age
      gender
      skills {
        id
        name
        createdAt
        updatedAt
      }
      registeredIn {
        id
        title
        description
        image
        ownedBy {
          id
          name
          createdAt
          updatedAt
        }
        participants {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        teams {
          id
          name
          createdAt
          updatedAt
        }
        date
        time
        period_days
        createdAt
        updatedAt
      }
      partOf {
        id
        name
        members {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVolunteer = /* GraphQL */ `
  subscription OnDeleteVolunteer {
    onDeleteVolunteer {
      id
      name
      age
      gender
      skills {
        id
        name
        createdAt
        updatedAt
      }
      registeredIn {
        id
        title
        description
        image
        ownedBy {
          id
          name
          createdAt
          updatedAt
        }
        participants {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        teams {
          id
          name
          createdAt
          updatedAt
        }
        date
        time
        period_days
        createdAt
        updatedAt
      }
      partOf {
        id
        name
        members {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNGO = /* GraphQL */ `
  subscription OnCreateNGO {
    onCreateNGO {
      id
      name
      activities {
        id
        title
        description
        image
        ownedBy {
          id
          name
          createdAt
          updatedAt
        }
        participants {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        teams {
          id
          name
          createdAt
          updatedAt
        }
        date
        time
        period_days
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNGO = /* GraphQL */ `
  subscription OnUpdateNGO {
    onUpdateNGO {
      id
      name
      activities {
        id
        title
        description
        image
        ownedBy {
          id
          name
          createdAt
          updatedAt
        }
        participants {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        teams {
          id
          name
          createdAt
          updatedAt
        }
        date
        time
        period_days
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNGO = /* GraphQL */ `
  subscription OnDeleteNGO {
    onDeleteNGO {
      id
      name
      activities {
        id
        title
        description
        image
        ownedBy {
          id
          name
          createdAt
          updatedAt
        }
        participants {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        teams {
          id
          name
          createdAt
          updatedAt
        }
        date
        time
        period_days
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity {
    onCreateActivity {
      id
      title
      description
      image
      ownedBy {
        id
        name
        activities {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      participants {
        id
        name
        age
        gender
        skills {
          id
          name
          createdAt
          updatedAt
        }
        registeredIn {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        partOf {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      teams {
        id
        name
        members {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      date
      time
      period_days
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity {
    onUpdateActivity {
      id
      title
      description
      image
      ownedBy {
        id
        name
        activities {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      participants {
        id
        name
        age
        gender
        skills {
          id
          name
          createdAt
          updatedAt
        }
        registeredIn {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        partOf {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      teams {
        id
        name
        members {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      date
      time
      period_days
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity {
    onDeleteActivity {
      id
      title
      description
      image
      ownedBy {
        id
        name
        activities {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      participants {
        id
        name
        age
        gender
        skills {
          id
          name
          createdAt
          updatedAt
        }
        registeredIn {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        partOf {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      teams {
        id
        name
        members {
          id
          name
          age
          gender
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      date
      time
      period_days
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      name
      members {
        id
        name
        age
        gender
        skills {
          id
          name
          createdAt
          updatedAt
        }
        registeredIn {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        partOf {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      name
      members {
        id
        name
        age
        gender
        skills {
          id
          name
          createdAt
          updatedAt
        }
        registeredIn {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        partOf {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      name
      members {
        id
        name
        age
        gender
        skills {
          id
          name
          createdAt
          updatedAt
        }
        registeredIn {
          id
          title
          description
          image
          date
          time
          period_days
          createdAt
          updatedAt
        }
        partOf {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBasicVolunteer = /* GraphQL */ `
  subscription OnCreateBasicVolunteer {
    onCreateBasicVolunteer {
      id
      name
      gender
      age
      skills
      team
      attendanceScore
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBasicVolunteer = /* GraphQL */ `
  subscription OnUpdateBasicVolunteer {
    onUpdateBasicVolunteer {
      id
      name
      gender
      age
      skills
      team
      attendanceScore
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBasicVolunteer = /* GraphQL */ `
  subscription OnDeleteBasicVolunteer {
    onDeleteBasicVolunteer {
      id
      name
      gender
      age
      skills
      team
      attendanceScore
      createdAt
      updatedAt
    }
  }
`;
