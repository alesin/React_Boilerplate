if (process.env.NODE_ENV === 'development') {
  require('./localSecrets')
}

const {db, User} = require('./server/db')

const seed = async () => {
  try {
    await db.sync({force: true})

    // *** USERS
    const [user1, user2, user3] = await Promise.all([
        User.create({
          username: 'bright_future',
          name: 'Bright Future',
          email: 'bright_future@email.com',
          imageUrl: 'bright_future.png',
          password: 'bright',
          salt: 'not_nearly_long_enough'
        }),
        User.create({
          username: 'mr_smog',
          name: 'Mr. Smog',
          email: 'mr_smog@email.com',
          imageUrl: 'a_noxious_cloud.png',
          password: 'smog',
          salt: 'deserveTheSecurityBreach'
        }),
        User.create({
          username: '18wheeler',
          name: 'Eighteen Wheeler',
          email: '18wheeler@email.com',
          imageUrl: 'old_tech.png',
          password: '18',
          salt: 'rollingAlong'
        })
      ])

    console.log(`
      Seed success!
    `)
    db.close()
  }
  catch (err) {
    console.error(`
      Oh noes!
    `)
    console.error(err.stack)
    db.close()
  }
}

seed()
