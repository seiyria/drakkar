---
title: "Macros"
permalink: /other/macros
excerpt: "Kingdom of Drakkar Macros"
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
sheathe | `sheathe <itemtype>` | `sheathe staff` | Same as `belt`.
wield | `wield <itemtype>` | `wield dagger` | Moves an item from your belt to your right hand.
draw  | `draw <itemtype>`  | `draw blunderbuss` | Same as `wield`.
withdraw          | `<name>, withdraw <amount>` | `Efo, withdraw 500000` | Withdraws a specified amount from your bank and places it on the counter.
deposit           | `<name>, deposit <amount>` | `Efo, deposit 500000` | Deposits a specified amount from the counter into your bank.
list skills       | `list skills`          | | List your skills and specializations, if any.
appraise          | `<name>, appraise <itemtype>` | `Efo, appraise bottle` | Appraises an item and gets a value for it. Can be used to identify similar-looking items such as rings.
trade             | `trade enable|disable` | | If two players `trade enable`, they can drag items onto each others boxes to place them in one of their empty hands.
critsort          | `critsort enable|disable` | | Creatures on your hex will always be visible to you first. Primarily useful for zerking Barbarians.
throw             | `throw <itemtype> at <name>` | `throw dagger at slith` | Throws an item from your hand at a specified creature. Some items return when thrown, making this good for soloing some lairs.
tan               | `<name>, tan` | `Efo, tan` | Tans a hide placed at the feet of a tanner.
count             | `count <itemtype>` | `count ring` | Counts the number of the specified item type on the ground.
look              | `look at <name>` | `look at seiyria` | Looks at a player. If you have a skill >= 40, you will also appraise their current skill level.
dash              | `dash enable|disable` | | Turns on dashes. After every round, dashes appear in your log.
chase             | `chase <name>` | `chase seiyria` | Chase after a specified player.
hug               | `hug <name>` | `hug seiyria` | Hug a player. If they have committed an evil action against you, this will forgive them.
sweep             | `sweep <dir>` | `sweep e` | Sweep in a direction. Only works if you're holding a broom, else it will try to use Martialist sweep.
raid-             | `raid-`       | | Show your current location as well as some other info.
combyells         | `combyells disable|enable` | `combyells enable` | Barbarian only - become more quiet and stop yelling for every action.
paint             | `paint` | | Repaint the screen, redrawing crit boxes.
redraw            | `redraw`| | Same as `paint`.

## System Macros

Macro | Usage | Example | Explanation
----- | ----- | ------- | -----------
*RTB              | `*RTB`            | | Moves the item in your right hand to your belt.
*LTB              | `*LTB`            | | Moves the item in your left hand to your belt.
*RTP              | `*RTP`            | | Moves the item in your right hand to your pouch.
*LTP              | `*LTP`            | | Moves the item in your left hand to your pouch.
*RTS              | `*RTS`            | | Moves the item in your right hand to your sack.
*LTS              | `*LTS`            | | Moves the item in your left hand to your sack.
*RTG              | `*RTG`            | | Moves the item in your right hand to the ground.
*LTG              | `*LTG`            | | Moves the item in your left hand to the ground.
*BTR              | `*BTR #`          | `*BTR 2`  | Moves the specified item in your belt to your right hand.
*BTL              | `*BTL #`          | `*BTL 2`  | Moves the specified item in your belt to your left hand.
*PTR              | `*PTR #`          | `*PTR 2`  | Moves the specified item in your pouch to your right hand.
*PTL              | `*PTL #`          | `*PTL 2`  | Moves the specified item in your pouch to your left hand.
*STR              | `*STR #`          | `*STR 2`  | Moves the specified item in your sack to your right hand.
*STL              | `*STL #`          | `*STL 2`  | Moves the specified item in your sack to your left hand.
*swap             | `*swap`           | | Swap the items in your hands.
*UTX              | `*UTX #`          | `*UTX 11` | Right-click a given item. 11 is the slot of helm, primarily used with the Researcher Helm. See UTX table below for more slots.
*xform            | `*xform ###`      | `*xform 101` | Cast a tier.
*xexpire          | `*xexpire ###`    | `*xexpire 101` | Turn a tier off (if it was cast on you, and isn't a debuff). For example, `Sullen Intruder` is `30053`.
*quirk            | `*quirk ### enable|disable` | `*quirk 178 enable` | Turn a quirk on or off. See the Quirk table below for more quirks.
*drink            | `*drink`          | | Drinks a drinkable bottle from your sack.
*train            | `*train 0 ## $$`  | `*train 0 10 500000` | Train a certain skill. See the Skill table below for the ## ids.
*assess           | `*assess 0 ##`    | `*assess 0 10` | Assess a certain skill. See the Skill table below for the ## ids.

Here are some other ones that need to be formally tested and understood before adding to the list above:


* `*sellr` (sell right, probably)
* `*m <number> <number>` (move, probably)
* `*look g` (look at ground, probably)
* `*look c` (look at counter, probably)
* `*sell`
* `*inv`
* `*itR`
* `*describe belt|locker|pouch|brew|sack|counter|ground <slot>` (double click item for desc, probably)
* `*describe r|l`
* `*describe sale <number> <number>`
* `*prices`
* `*buy`
* `*discuss`
* `*pile`

### UTX Table

Slot | UTX
---- | ---
armor      | 0
left hand  | 3
right hand | 4
helm       | 11

### Quirk Table

Quirk | Class | Id
----- | ----- | --
Resist Evil           | Paladin | 40
Parry                 | Paladin | 43
Quick Shadow          | Thief | 123
Proximity Slicer      | Thief | 124
Forgotten Aggression  | Thief | 125
Applied Thievery      | Thief | 129
Allied Avoidance      | Martialist | 61
Concussive Fist       | Martialist | 62
Dragon's Revenge      | Martialist | 67
Dragon's Laughter     | Martialist | 68
Dragon's Recourse     | Martialist | 69
Psionic Reflection    | Barbarian | 143
Riposte               | Barbarian | 145
Specters Blanket      | Mentalist | 91
Allied Aversion       | Mentalist | 92
Combat Healing        | Healer | 109
Snapshot Heal         | Healer | 104
Crossover Knowledge   | Fighter/Mentalist | 161
Battlemage Retribution| Fighter/Mentalist | 162
Battlemage Leech      | Fighter/Mentalist | 163
Battlemage Recovery   | Fighter/Mentalist | 164
Private Life          | Primal | 173
Primal Form           | Primal |178
Dark Knowledge        | Primal |186

### Skill Table

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
Dagger      | 11
Psionic     | 12
Streetwise  | 13
Longsword   | 14
Polearm     | 15
Climbing    | 16
Brewing     | 18

## Party Macros

Macro | Usage | Example | Explanation
----- | ----- | ------- | -----------
create  | `party create <name>` | `party create test`   | Creates a party with the given name.
join    | `party join <name>`   | `party join test`     | Join a party, if the leader is visible to you.
give    | `party give <name>`   | `party give seiyria`  | Give party leadership to someone else in the party. Only works if you're the leader.
break   | `party break`         |                       | Break the party up. Only works if you're the leader.
leave   | `party leave`         |                       | Leave the party. If you're the leader, it's passed to the next person in line.
eject   | `party eject <name>`  | `party eject seiyria` | Eject a player from the party.
list    | `party list`          |                       | Show all players in party in the combat log.

## Guild Macros

Macro | Usage | Example | Explanation
----- | ----- | ------- | -----------
tag     | `guild tag <name>`    | `guild tag seiyria`   | Tags a player into your guild. Only works if you have tagging rights.
eject   | `guild eject <name>`  | `guild eject seiyria` | Ejects a player from your guild. Only works if you have tagging rights.
leave   | `guild leave`         |                       | Leave a guild.
list    | `guild list`          |                       | Similar to `party list`, but only shows guild members that are currently visible.

## Class Macros

Macro | Usage | Class | Explanation
----- | ----- | ------- | -----------
b     | `b`   | Barbarian | Begin berserking. When "you increase your rage," there is no more berserking to be done.
arg   | `arg` | Barbarian | Initiate automatic attacks on valid targets. Sometimes you might hit friendlies, so beware.
cleave| `cleave` | Barbarian (51+) | De-zerks you, does a lot of damage, and debuffs the target.


## Emote Macros

All emotes are used like so: `i <emote>`. Additionally, most emotes support emoting at a person, such as `i <emote> <name>`. The only emotes that do not support this are `think` and `rofl`.

Credits to ROAR guild for these.

Macro | Example Result
----- | -------
scream    | `Seiyria screams!`, `Seiyria screams at Brenem!`, `Seiyria screams at you!`
growl     | `Seiyria growls!`, `Seiyria growls at Brenem!`, `Seiyria growls at you!`
grumble   | `Seiyria grumbles!`, `Seiyria grumbles at Brenem!`, `Seiyria grumbles at you!`
holler    | `Seiyria hollers!`, `Seiyria hollers at Brenem!`, `Seiyria hollers at you!`
yell      | `Seiyria yells!`, `Seiyria yells at Brenem!`, `Seiyria yells at you!`
jostle    | `Seiyria jostles!`, `Seiyria jostles Brenem!`, `Seiyria jostles you!`
sing      | `Seiyria sings!`, `Seiyria sings at Brenem!`, `Seiyria sings at you!`
wink      | `Seiyria winks!`, `Seiyria winks at Brenem!`, `Seiyria winks at you!`
think     | `Nothing seems to come to mind.`, `Seiyria seems rather annoyed.`
pinch     | `Seiyria pinches!`, `Seiyria winks at Brenem!`, `Seiyria winks at you!`
rofl      | `Seiyria rolls on the floor laughing!`
spit      | `Seiyria spits!`, `Seiyria spits at Brenem!`, `Seiyria spits at you!`
tickle    | `Seiyria tickles!`, `Seiyria tickles Brenem!`, `Seiyria tickles you!`
dance     | `Seiyria dances!`, `Seiyria dances with Brenem!`, `Seiyria dances with you!`
sneeze    | `Seiyria sneezes!`, `Seiyria sneezes at Brenem!`, `Seiyria sneezes at you!`
scratch   | `Seiyria scratches!`, `Seiyria scratches Brenem!`, `Seiyria scratches you!`
kiss      | `Seiyria kisses!`, `Seiyria kisses Brenem!`, `Seiyria kisses you!`
agree     | `Seiyria agrees!`, `Seiyria agrees with Brenem!`, `Seiyria agrees with you!`
mock      | `Seiyria mocks!`, `Seiyria mocks Brenem!`, `Seiyria mocks you!`
prod      | `Seiyria prods!`, `Seiyria prods Brenem!`, `Seiyria prods you!`
disagree  | `Seiyria disagrees!`, `Seiyria disagrees with Brenem!`, `Seiyria disagrees with you!`

## Macro combinations

Since macros can be combined, here are some useful examples of what you can do with macro combination. Some macros have to be edited into your macro file manually.

Macro | Explanation
----- | -----------
`drop left; steal from` | Drop the item in your left hand, and steal from the clicked target. Useful for skilling Thief.
`belt right; take bottle from sack; drink bottle` | Drink an IH bottle if your hands are full.
`drop bottle; wield sword` | Drop the bottle from the previous macro, then re-wield the item from your belt.
`*RTB;*drink;*BTR 0` | Zero-round belt and drink.
`form transmute^D*RTB^D*itR g 1 *30770^D*RTS^D*BTR` | Transmute, belt the item in your right hand, pick up gold, sack the coin, then re-wield your weapon. Your right hand item must be beltable and your first belt slot must be open.
