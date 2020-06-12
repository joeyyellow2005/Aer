module.exports = (client, db, member) => {
  let greetingsFirst = [`Greetings, `, `Whooosh, `, `Welcome to the server, `]
  let greetingsAfter = [` we are glad to have you.`, ` has landed.`, ``]
  const channel = member.guild.cache.channels.find(ch => ch.name === 'new-members')
  if (!channel) return
  let greetingNum = Math.floor((Math.random() * greetingsFirst.length) + 1)
  channel.send(greetingsFirst[greetingNum] + member + greetingsAfter[greetingNum])
}
