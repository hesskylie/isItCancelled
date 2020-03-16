'use strict'

const db = require('../server/db')
const {User, Event} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const events = await Event.bulkCreate([
    {name: "Steph Curry's Cough", category: 'general', status: 'cancelled'},
    {
      name: 'Bull Market',
      category: 'general',
      status: 'cancelled',
      link:
        'https://www.cbsnews.com/news/dow-jones-bear-market-level-the-11-year-bull-market-is-ending-heres-what-a-bear-market-means/'
    },
    {
      name: 'Las Vegas Casino Buffets',
      category: 'general',
      status: 'cancelled',
      link:
        'https://thehill.com/policy/healthcare/486902-mgm-resorts-to-close-vegas-buffets-amid-coronavirus-outbreak'
    },
    {
      name: "Pope Francis' Public Appearances",
      category: 'general',
      status: 'remote'
    },
    {name: 'Handshakes', category: 'general', status: 'cancelled'},
    {name: 'Hugs', category: 'general', status: 'pending'},
    {name: 'Fist Bumps', category: 'general', status: 'ongoing'},
    {name: 'The Apocalypse', category: 'general', status: 'cancelled'},
    {name: 'The OA on Netflix', category: 'general', status: 'cancelled'},
    {
      name: 'March Madness',
      category: 'sports',
      status: 'cancelled',
      link:
        'https://www.ncaa.com/live-updates/basketball-men/d1/ncaa-cancels-mens-and-womens-basketball-championships-due'
    },
    {
      name: 'Carlos Cordeiro',
      category: 'sports',
      status: 'cancelled',
      link:
        'https://www.mlssoccer.com/post/2020/03/12/us-soccer-federation-president-carlos-cordeiro-steps-down'
    },
    {
      name: 'E3',
      category: 'tech',
      status: 'cancelled',
      link:
        'https://www.theverge.com/2020/3/11/21163570/e3-canceled-coronavirus-outbreak-xbox-nintendo'
    },
    {name: 'Minecraft Fest', category: 'tech', status: 'remote'},
    {
      name: 'March SATs',
      category: 'education',
      status: 'pending',
      link:
        'https://collegereadiness.collegeboard.org/sat/register/test-center-closings'
    },
    {
      name: 'Disney',
      category: 'attraction',
      status: 'postponed',
      link:
        'https://www.nytimes.com/2020/03/12/business/disneyland-coronavirus.html'
    },
    {
      name: 'Broadway',
      category: 'attraction',
      status: 'postponed',
      link:
        'https://www.broadway.com/buzz/198775/broadway-shuts-down-performances-canceled-through-april-12-due-to-covid-19-pandemic/'
    },
    {
      name: 'Universal Studios',
      category: 'attraction',
      status: 'postponed'
    },
    {
      name: 'SXSW',
      category: 'conference',
      status: 'cancelled'
    },
    {
      name: 'Cold Spring Harbor',
      category: 'conference',
      status: 'cancelled'
    },
    {
      name: 'NAR',
      category: 'conference',
      status: 'cancelled'
    },
    {
      name: 'CERAWeek 2020',
      category: 'conference',
      status: 'cancelled'
    },
    {
      name: 'Wondercon 2020',
      category: 'conference',
      status: 'postponed'
    },
    {
      name: 'ASEAN Summit',
      category: 'conference',
      status: 'postponed'
    },
    {
      name: 'Adobe Summit',
      category: 'conference',
      status: 'remote'
    },
    {
      name: 'International Monetary Fund',
      category: 'conference',
      status: 'remote'
    },
    {
      name: 'San Diego Comic-Con',
      category: 'conference',
      status: 'pending'
    },
    {
      name: 'Houston Rodeo',
      category: 'conference',
      status: 'cancelled',
      link:
        'https://www.chron.com/news/houston-texas/houston/article/houston-rodeo-shut-down-coronavirus-concerns-15123010.php'
    },
    {
      name: 'Sanders & Biden Rallies',
      category: 'general',
      status: 'cancelled',
      link:
        'https://www.nytimes.com/2020/03/10/us/politics/sanders-biden-rally-coronavirus.html'
    },
    {
      name: 'NRA Meeting',
      category: 'conference',
      status: 'cancelled'
    },
    {
      name: 'Ohio K-12 Schools',
      category: 'education',
      status: 'postponed'
    },
    {
      name: 'Maryland K-12 Schools',
      category: 'education',
      status: 'postponed'
    },
    {
      name: 'New Mexico K-12 Schools',
      category: 'education',
      status: 'postponed'
    },
    {
      name: 'Oregon K-12 Schools',
      category: 'education',
      status: 'postponed'
    },
    {
      name: 'Michigan K-12 Schools',
      category: 'education',
      status: 'postponed'
    },
    {
      name: 'Kentucky K-12 Schools',
      category: 'education',
      status: 'postponed'
    },
    {
      name: 'Illinois K-12 Schools',
      category: 'education',
      status: 'postponed'
    },
    {
      name: 'Harvard',
      category: 'education',
      status: 'cancelled'
    },
    {
      name: 'Ultra',
      category: 'music',
      status: 'cancelled'
    },
    {
      name: 'Tin Pan South Songwriting Fest',
      category: 'music',
      status: 'cancelled'
    },
    {
      name: 'Avril Lavigne',
      category: 'music',
      status: 'cancelled'
    },
    {
      name: 'BTS',
      category: 'music',
      status: 'cancelled'
    },
    {
      name: 'Coachella',
      category: 'music',
      status: 'postponed'
    },
    {
      name: 'Stagecoach',
      category: 'music',
      status: 'postponed'
    },
    {
      name: 'Perl Jam',
      category: 'music',
      status: 'postponed'
    },
    {
      name: 'Green Day',
      category: 'music',
      status: 'postponed'
    },
    {
      name: 'Blake Shelton',
      category: 'music',
      status: 'postponed'
    },
    {
      name: 'PGA Golf',
      category: 'sports',
      status: 'cancelled'
    },
    {
      name: 'Formula1',
      category: 'sports',
      status: 'cancelled'
    },
    {
      name: 'Gatornationals',
      category: 'sports',
      status: 'cancelled'
    },
    {
      name: 'Bundesliga',
      category: 'sports',
      status: 'ongoing'
    },
    {
      name: 'NASCAR',
      category: 'sports',
      status: 'ongoing'
    },
    {
      name: 'NBA Season',
      category: 'sports',
      status: 'postponed',
      link:
        'https://nba.nbcsports.com/2020/03/12/adam-siver-says-nba-suspended-for-30-days/'
    },
    {
      name: 'NHL Season',
      category: 'sports',
      status: 'postponed',
      link:
        'https://www.espn.com/nhl/story/_/id/28893110/why-nhl-hit-pause-button-2019-20-season-comes-next'
    },
    {
      name: 'MLB Season',
      category: 'sports',
      status: 'postponed',
      link:
        'https://mlb.nbcsports.com/2020/03/12/major-league-baseball-expected-to-suspend-spring-training/'
    },
    {
      name: 'MLS Season',
      category: 'sports',
      status: 'postponed'
    },
    {
      name: 'Boston Marathon',
      category: 'sports',
      status: 'postponed'
    },
    {
      name: 'US Soccer',
      category: 'sports',
      status: 'postponed'
    },
    {
      name: 'XFL',
      category: 'sports',
      status: 'postponed'
    },
    {
      name: 'English Premier League',
      category: 'sports',
      status: 'postponed'
    },
    {
      name: 'Serie A',
      category: 'sports',
      status: 'postponed'
    },
    {
      name: 'Ligue 1 & 2',
      category: 'sports',
      status: 'postponed'
    },
    {
      name: 'Champions League/Europa League',
      category: 'sports',
      status: 'postponed'
    },
    {
      name: 'La Liga',
      category: 'sports',
      status: 'pending'
    },
    {
      name: 'E3',
      category: 'tech',
      status: 'cancelled',
      link:
        'https://www.theverge.com/2020/3/11/21163570/e3-canceled-coronavirus-outbreak-xbox-nintendo'
    },
    {
      name: 'Facebook Global Marketing',
      category: 'tech',
      status: 'cancelled'
    },
    {
      name: 'Google i/o',
      category: 'tech',
      status: 'cancelled'
    },
    {
      name: 'Google News Initiative',
      category: 'tech',
      status: 'cancelled'
    },
    {
      name: 'Mobile Word Congress',
      category: 'tech',
      status: 'cancelled'
    },
    {
      name: 'Games Developer Conference',
      category: 'tech',
      status: 'cancelled'
    },
    {
      name: 'Microsoft Build',
      category: 'tech',
      status: 'remote',
      link:
        'https://www.theverge.com/2020/3/12/21163586/microsoft-build-2020-virtual-event-cancel-online-coronavirus'
    },
    {
      name: 'F8',
      category: 'tech',
      status: 'remote'
    },
    {
      name: 'Cloud Next',
      category: 'tech',
      status: 'remote'
    },
    {
      name: 'Minecraft Fest',
      category: 'tech',
      status: 'remote',
      link:
        'https://www.minecraft.net/en-us/article/minecraft-festival-postponed'
    }
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${events.length} events successfully`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
