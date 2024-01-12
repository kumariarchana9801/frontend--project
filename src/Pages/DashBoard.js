import React from 'react'
import TicketCard from '../Component/TicketCard'
function DashBoard() {
  const tickets = [
    {
      category: 'Q1 2024',
      color: 'red',
      title: 'NFT Safety 101 Video',
      owner: 'Ania Kubow',
      avatar: 'https://png.pngtree.com/element_our/20190523/ourmid/pngtree-hand-painted-small-fresh-female-high-school-student-image_1086346.jpg',
      status: 'done',
      priority: 5,
      progress: 40,
      description:
        'Make a video showcasing how to work with NFTs safely, including how to know if one is not genuine.',
      timestamp: '2024-02-11T07:36:17+0000',
    },
    {
      category: 'Q1 2024',
      color: 'red',
      title: 'Build and Sell an AI Model',
      owner: 'Ania Kubow',
      avatar: 'https://png.pngtree.com/element_our/20190523/ourmid/pngtree-hand-painted-small-fresh-female-high-school-student-image_1086346.jpg',
      status: 'working on it',
      priority: 4,
      progress: 2,
      description:
        'Show how easy it is to work with machine Learning and show people how to make money by building and selling an AI API',
      timestamp: '2024-02-13T07:36:17+0000',
    },
    {
      category: 'Q1 2024',
      color: 'red',
      title: 'My top tools for 2024',
      owner: 'Ania Kubow',
      avatar: 'https://png.pngtree.com/element_our/20190523/ourmid/pngtree-hand-painted-small-fresh-female-high-school-student-image_1086346.jpg',
      status: 'stuck',
      priority: 10,
      progress: 6,
      description:
        'Share my top tools for 2024 with everyone in a 15 minute video.',
      timestamp: '2024-02-16T07:36:17+0000',
    },
    {
      category: 'Q2 2024',
      color: 'blue',
      title: 'Frogger in React',
      owner: 'Ania Kubow',
      avatar: 'https://png.pngtree.com/element_our/20190523/ourmid/pngtree-hand-painted-small-fresh-female-high-school-student-image_1086346.jpg',
      status: '',
      priority: 2,
      progress: 0,
      description:
        'Make a video showing how to build the popular retro game Frogger in React.',
      timestamp: '2024-02-21T07:36:17+0000',
    },
  ]
  const colors = [
    'rgb(255,179,186)',
    'rgb(255,223,186)',
    'rgb(255,255,186)',
    'rgb(186,255,201)',
    'rgb(186,225,255)',
  ]
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ]
  console.log(uniqueCategories)
  return (
    <div className="dashboard">
    <h1>My Projects</h1>
    <div className="ticket-container">
      {tickets &&
        uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex}>
            <h3>{uniqueCategory}</h3>
            {tickets
              .filter((ticket) => ticket.category === uniqueCategory)
              .map((filteredTicket, _index) => (
                <TicketCard
                  id={_index}
                 color={colors[categoryIndex] ||colors[0]}
                  ticket={filteredTicket}
                />
              ))}
          </div>
        ))}
    </div>
  </div>
)
}


export default DashBoard