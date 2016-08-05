---
title: "Macros"
permalink: /other/macros
excerpt: "Macros"
---

{% include base_path %}

Macros are an unavoidable truth in Drakkar, so understanding how they work is crucial for continued success in the game. There are a lot of different macros, so following will be a list of macros, what they do, and some sample usages of macros.

# Creating a Macro
Hit the macro dropdown in game, and hit "New"

There are a few options here which can be explained as such:

Option | What it does
------ | ------------
Ctrl          | Requires CTRL to be held to activate this macro
Alt           | Requires ALT to be held to activate this macro
Shift         | Requires SHIFT to be held to activate this macro
Auto return   | Activating this macro will activate it instantly ("automatically press return after entering this macro")
Target lock   | This macro will "lock" on your macro bar and set it self as the active macro (much like espear, assault, etc)
Needs path    | This macro needs a path to a target (such as firebreath, illusion, etc)

When adding the actual macro part, you can have up to 3 individual macros, separated by semicolons, in your command. So, you could do: `take 500000 coins from sack; drop coins`. Some combinations can be very helpful, especially when doing repetitive actions like buying lots of chits.

Most macros can also have a suffix of @ to yell text while doing the macro, such as `b@I'm zerking, get outta my way!`.

# Macros

There are a lot of built in macros. Some may be prefixed with `*`, which means they're built-ins and are zero-time execution. Additionally, some require a name target, so if it says `name`, it likely needs to be used in conjunction with an npc. Any item that works with the hands can use either an item type (cloak, dagger, etc) or a hand position (left or right).

## Basic Macros

Macro | Usage | Example | Explanation
----- | ----- | ------- | -----------
get   | `get <itemtype>` | `get corpse` | Take the item type from the ground.
take  | `take <itemtype> from <location>` | `take bottle from sack` | Takes a specified item from a location (can be used to take coins from sack and drop, etc)
put   | `put <itemtype> in <location>` | `put right in sack` | Takes a specified target and puts it in a location (put items from hand in sack, etc)
drop  | `drop <itemtype>` | `drop right` | Drops an item from your hands.
break | `break <itemtype>` | `break scales` | Breaks an item in your hands. If a Barbarian breaks scales, they can get experience.
belt  | `belt <itemtype>` | `belt staff` | Moves an item from your hands to your belt.
wield | `wield <itemtype>` | `wield dagger` | Moves an item from your belt to your right hand.
withdraw          | `<name>, withdraw <amount>` | `Efo, withdraw 500000` | Withdraws a specified amount from your bank and places it on the counter.
deposit           | `<name>, deposit <amount>` | `Efo, deposit 500000` | Deposits a specified amount from the counter into your bank.
appraise          | `<name>, appraise <itemtype>` | `Efo, appraise bottle` | Appraises an item and gets a value for it. Can be used to identify similar-looking items such as rings.
trade enable      | `trade enable|disable` | | If two players `trade enable`, they can drag items onto each others boxes to place them in one of their empty hands.
critsort enable   | `critsort enable|disable` | | Creatures on your hex will always be visible to you first. Primarily useful for zerking Barbarians.
throw             | `throw <itemtype> at <name>` | `throw dagger at slith` | Throws an item from your hand at a specified creature. Some items return when thrown, making this good for soloing some lairs.
tan               | `<name>, tan` | `Efo, tan` | Tans a hide placed at the feet of a tanner.
count             | `count <itemtype>` | `count ring` | Counts the number of the specified item type on the ground.
look              | `look at <name>` | `look at seiyria` | Looks at a player. If you have a skill >= 40, you will also appraise their current skill level.
dash              | `dash enable|disable` | | Turns on dashes. After every round, dashes appear in your log.
chase             | `chase <name>` | `chase seiyria` | Chase after a specified player.
hug               | `hug <name>` | `hug seiyria` | Hug a player. If they have committed an evil action against you, this will forgive them.
sweep             | `sweep <dir>` | `sweep e` | Sweep in a direction. Only works if you're holding a broom, else it will try to use Martialist sweep.

## System Macros

Macro | Usage | Example | Explanation
----- | ----- | ------- | -----------
*rtb              | `*rtb`            | | Moves the item in your right hand to your belt.
*ltb              | `*ltb`            | | Moves the item in your left hand to your belt.
*rtp              | `*rtp`            | | Moves the item in your right hand to your pouch.
*ltp              | `*ltp`            | | Moves the item in your left hand to your pouch.
*rts              | `*rts`            | | Moves the item in your right hand to your sack.
*lts              | `*lts`            | | Moves the item in your left hand to your sack.
*itr              | `*itr`            | | Moves the item in your right hand to the counter.
*itl              | `*itl`            | | Moves the item in your left hand to the counter.
*rtg              | `*rtg`            | | Moves the item in your right hand to the ground.
*ltg              | `*ltg`            | | Moves the item in your left hand to the ground.
*btr              | `*btr #`          | `*btr 2`  | Moves the specified item in your belt to your right hand.
*btl              | `*btl #`          | `*btl 2`  | Moves the specified item in your belt to your left hand.
*ptr              | `*ptr #`          | `*ptr 2`  | Moves the specified item in your pouch to your right hand.
*ptl              | `*ptl #`          | `*ptl 2`  | Moves the specified item in your pouch to your left hand.
*str              | `*str #`          | `*str 2`  | Moves the specified item in your sack to your right hand.
*stl              | `*stl #`          | `*stl 2`  | Moves the specified item in your sack to your left hand.
*swap             | `*swap`           | | Swap the items in your hands.
*utx              | `*utx #`          | `*utx 11` | Right-click an equipped item. 11 is the slot of helm, primarily used with the Researcher Helm.
*xform            | `*xform ###`      | `*xform 101` | Cast a tier.
*xexpire          | `*xexpire ###`    | `*xexpire 101` | Turn a tier off (if it was cast on you, and isn't a debuff)
*drink            | `*drink`          | | Drinks a drinkable bottle from your sack.
*train            | `*train 0 ## $$`  | `*train 0 10 500000` | Train a certain skill. See the table below for the ## ids.
*assess           | `*assess 0 ##`    | `*assess 0 10` | Assess a certain skill. See the table below for the ## ids.

Here are some other ones, but I can't quite remember what they are or how they work:
* `*sellr`
* `*m`

Skill | Id
----- | --
Greatsword  | 01
Shortsword  | 02
Staff       | 03
Thrown      | 04
Mace        | 05
Bow         | 06
Axe         | 07
Martialist  | 08
Thief       | 09
Healer      | 10
Dagger      | 11
Mentalist   | 12
Brewing     | 13
Longsword   | 14
Polearm     | 15
Climbing    | 16

## Party Macros

Macro | Usage | Example | Explanation
----- | ----- | ------- | -----------
create  | `party create <name>` | `party create test`   | Creates a party with the given name.
join    | `party join <name>`   | `party join test`     | Join a party, if the leader is visible to you.
give    | `party give <name>`   | `party give seiyria`  | Give party leadership to someone else in the party. Only works if you're the leader.
break   | `party break`         |                       | Break the party up. Only works if you're the leader.
leave   | `party leave`         |                       | Leave the party. If you're the leader, it's passed to the next person in line.
eject   | `party eject <name>`  | `party eject seiyria` | Eject a player from the party.

## Guild Macros

Macro | Usage | Example | Explanation
----- | ----- | ------- | -----------
tag     | `guild tag <name>`    | `guild tag seiyria`   | Tags a player into your guild. Only works if you have tagging rights.
eject   | `guild eject <name>`  | `guild eject seiyria` | Ejects a player from your guild. Only works if you have tagging rights.

## Class Macros

Macro | Usage | Class | Explanation
----- | ----- | ------- | -----------
b     | `b`   | Barbarian | Begin berserking. When "you increase your rage," there is no more berserking to be done.
arg   | `arg` | Barbarian | Initiate automatic attacks on valid targets. Sometimes you might hit friendlies, so beware.


## Emote Macros

All emotes are used like so: `i <emote>`. Additionally, most emotes support emoting at a person, such as `i <emote> <name>`. The only emotes that do not support this are `think` and `rofl`.

Credits to ROAR guild for these.

Macro | Example Result
----- | -------
scream    | `Seiyria screams!`
growl     | `Seiyria growls!`
grumble   | `Seiyria grumbles!`
holler    | `Seiyria hollers!`
yell      | `Seiyria yells!`
jostle    | `Seiyria jostles!`
sing      | `Seiyria sings!`
wink      | `Seiyria winks!`
think     | `Nothing seems to come to mind.`
pinch     | `Seiyria pinches!`
rofl      | `Seiyria rolls on the floor laughing!`
spit      | `Seiyria spits!`
tickle    | `Seiyria tickles!`
dance     | `Seiyria dances!`
sneeze    | `Seiyria sneezes!`
scratch   | `Seiyria scratches!`
kiss      | `Seiyria kisses!`
agree     | `Seiyria agrees!`
mock      | `Seiyria mocks!`
prod      | `Seiyria prods!`
disagree  | `Seiyria disagrees!`

## Macro combinations

Since macros can be combined, here are some useful examples of what you can do with macro combination.

Macro | Explanation
----- | -----------
`drop left; steal from` | Drop the item in your left hand, and steal from the clicked target. Useful for skilling thief.
`belt right; take bottle from sack; drink bottle` | Drink an IH bottle if your hands are full.
`drop bottle; wield sword` | Drop the bottle from the previous macro, then re-wield the item from your belt.
