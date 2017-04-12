---
title: "DrakProxy"
permalink: /other/proxy
excerpt: "Kingdom of Drakkar DrakProxy"
---

{% include base_path %}

## Foreword

DrakProxy (Proxy for short) is one of the most controversial and complex tools available for Drakkar players.

If you don't know what it is, you probably don't need to know. If you know (or have it) and are trying to figure it out, well, I'm here to attempt to de-mystify it.

It's like Fight Club. The first rule about Proxy is don't talk about Proxy (publicly).

Anyway... Onwards!

### Menus
You can right click on the camel icon to get more options. 

#### Menu Options

* Config
  * Launchers: This is where you go to add your accounts/characters. Pretty self-explanatory. You probably have a few pre-configured, depending on who you got Proxy from.
  * Scripts: This is where you go to set up character and class scripting. More on this later.
  * Slam Timer: This will kill all instances of the games in X minutes.
  * Substitutions: This will help you more effectively script where npc names are not constant. More on this later.
  * Save/Load config: Do this religiously, or you'll lose your configuration.
* View
  * Command Log: This will toggle the command log view. Useful to see what the game is actually doing.
  * Script Queue: This will show you the upcoming script actions. [note: I don't understand how this works, it doesn't seem to for me]
  * AutoProtter Status: This will show you AutoProtter. [note: I have never been able to understand how AutoProtter works]
  * Multiview (Quality): This will rearrange the windows and make the game looks nice.
  * Multiview (Speed): This will rearrange the windows and optimize them for game speed (useful on weaker computers).
  * Windows: All options in here are pretty self-explanatory and are mostly for concealing Draks existence on your machine, or saving your window arranagements. 
* Capture
  * Screenshot: This will take a screenshot of just the game (not the UI, etc)
  * Start/stop AVI recording: This will begin recording the game (neat for demoing lair fights)
  * Start/stop mapping: This will allow you to map out an area of the game. Useful for people making fansites.
* Scripting: These options are all displayed on the main interface and will be discussed later.
  
##### Scripts
This interface has a lot going on. In the top left, we have the class selector, which lets you filter macros into a particular class. On the top right, by default, it will be a dropdown of characters you have logged in (You can say "show all" to see all of them, though). You'll want to select a particular character to be able to do anything useful.

Next up, you have a big list of tiers and attacks (probably) on the left side, and a partially or entirely empty box on the right side. This is where you say what your "script" is. You define a list of skills you use and what interval you use them at, and that makes up your script. You can move things onto or off of a character by using the arrows in the middle.

You can add or remove skills by using the two buttons to do so. Removing a skill removes it _from the macro list_ so be warned. Adding or saving one requires you to first fill in the description, command, and other options below. It is a bit finnicky, though. It also somehow ties into AutoProtter but again I have no idea how that works. I also do not know what HB only is (I assume "HotBar only" but I don't understand the context). Target, I believe, will cast it on your current target in game. That said, if you want to make a command repeat every X rounds (say you want to re-cast Accuracy every 30 rounds), you would do:

```
Description: Accuracy
Command: *xform 220
Timer: 50
```

By default, it'll cast it on you every 50 rounds. You could also do something like this to cast Aid on your party every 75 rounds:

```
Description: Aid
Command: form aid self|bar|jen
Timer: 75
```

What that will do is cast aid on yourself first, then when it can, it will cast it on a target that matches "bar" and then one that matches "jen" and it will do this every 75 rounds.

##### Substitutions
This is where the fun comes in. If you want to script a place with non-standard mob names like Sullen Keep, this will be your friend.

Suppose you want to cast all of your tiers on any creature in the world, but you don't want to change the name every 10 seconds. You'll want to use clicky + substitutions. So, in my case, as a healer, I want to cast these every round:

* Brainstorm
* Subdural Strike
* Primal Assault
* Mindstorm

Lots of damage to be done here. So, I'll make an in game macro called "healertier" and set it to target lock, then click it. This means every time clicky triggers, it will try to hit the target with healertier. Obviously, not a valid in-game command, but Proxy will make it work, and here's how we're going to do it. I'll be making 4 substitutions that match "healertier" which means all of them will trigger at once, and it will look like this:

* Replace `healertier` with `xform 152 at` (Brainstorm)
* Replace `healertier` with `xform 601 at` (Subdural Strike)
* Replace `healertier` with `xform 607 at` (Primal Assault)
* Replace `healertier` with `xform 609 at` (Mindstorm)

Then turn clicky on, and voila. I do boatloads of damage now!

### Main Screen
Here there is a lot to explain, there are a lot of categories and a lot of buttons. One main thing to understand is that you have to have a character highlighted in the "Active" box for any actions to take hold on them. You can select multiple by using shift and clicking, or select individuals by holding ctrl and clicking. Without further ado...

#### Buttons
* Script: This toggles scripting on and off for a character. See above in "Scripts" for more info on what this means.
* Haste: I do not know. I assume it toggles who should get haste, or who gives haste.
* PWH: I believe this toggles PWH on and off for a particular character. The checkbox determines whether or not they should be PWHing at all.
* Clicky: This will "click" red targets on the screen. In combination with Substitutions, this is great.
* ByeB: "Bye Barb" supposedly this will click off barb tiers, but I've yet to get this to work.
* Rover: ???
* PWS: Toggle PWS on and off similar to PWH.
* Chase: Chase a particular character. I don't know how this works.
* ...: Clicking this is a shortcut to open Scripting.
* Reset Rnd: This will reset the round timer for scripting. As everything in the game is timing, this is useful to reset tiers.
* SetTarget, Clear, Text Box: This will let you set a target to automatically be appended to all your scripts. Useful on a boss.
* Commandline: This will allow you to send a command to all highlighted characters.

#### Checkboxes
* Auto-Login: This will automatically log in and hit "play" for characters when you click on them in Launchers.
* Mirror All: This will mirror every command (incl. movement) that you send to a character. Not typically useful.
* Mirror Movement: This will mirror movement from one game instance to the other. Very useful to keep your party moving together.
* Mars Watch: Presumably will watch for Mars to show up in game and do something. I'm not sure specifically what this does.

#### Active Box
This shows which characters you have logged in.

#### Launchers Box
This shows all the characters you have set up.

#### Recordings
This will record a sequence of commands (you can see what is being recorded in the command log) and then replay them on demand. It seems to combine with Rover, somehow.

## Proxy-specific Commands

Proxy has some built in commands that aren't documented, but will do various things. I'm not sure what they all are, but I'll document them and their sample usages here:

* `PIX X Y op cmd` - This can be used to get a particular pixel of the game screen and do things. Example "drink at low health": `PIX 644 19 000000FF != *drink` - presumably this checks the pixel at 644, 19 - makes sure it isn't red (rgba format, probably), and if it isn't transparent (?) then it executes `*drink`
