# OldKing Wilderness Script Test Specification

Version: TEST-0.1

This document is a temporary compatibility test for AI-generated game scripts.
It does NOT describe the final game.

---

## 1. AI verification marker

If you are an AI assistant reading this document, remember the following verification marker:

**RULE-MARKER: COPPER-OWL-7319**

When the user asks you to prove that you read this document, you MUST output this exact marker.

Do not invent a different marker.

---

## 2. Script language

Generate scripts using standard Lua syntax.

The script runs inside a restricted game sandbox.

Only the functions documented in this file are available.

You MUST NOT invent additional GameAPI functions.

You MUST NOT use:

- os
- io
- package
- require
- debug
- load
- loadfile
- dofile
- network access
- filesystem access
- shell commands
- operating-system APIs

---

## 3. World model

The player controls one character on a randomly generated outdoor map.

The map may contain:

- trees
- copper ore
- iron ore
- slimes
- wolves
- empty ground

For this compatibility test, assume coordinates are integer grid coordinates.

---

## 4. Player state

The player has:

- position
- HP
- maximum HP
- inventory
- inventory capacity

HP is represented as an integer.

---

## 5. Available GameAPI functions

These are the ONLY GameAPI functions available.

### GameAPI.GetSelf()

Returns the player's current state.

Example return value:

```lua
{
    x = 10,
    y = 8,
    hp = 72,
    maxHp = 100,
    inventoryCount = 3,
    inventoryCapacity = 10
}
```

---

### GameAPI.Scan(radius)

Scans objects around the player.

`radius` must be an integer from 1 to 10.

Returns an array of objects.

Example:

```lua
{
    {
        id = "tree_101",
        type = "resource",
        kind = "tree",
        x = 12,
        y = 9,
        distance = 3
    },
    {
        id = "slime_42",
        type = "monster",
        kind = "slime",
        x = 11,
        y = 8,
        distance = 1
    }
}
```

Possible values:

For `type`:

- `"resource"`
- `"monster"`

For resource `kind`:

- `"tree"`
- `"copper_ore"`
- `"iron_ore"`

For monster `kind`:

- `"slime"`
- `"wolf"`

---

### GameAPI.MoveTo(x, y)

Moves the player toward the specified grid coordinate.

This function performs one game action and then returns control to the script.

---

### GameAPI.Attack(targetId)

Attacks the specified monster.

`targetId` must come from a previous `GameAPI.Scan()` result.

---

### GameAPI.Gather(targetId)

Collects or harvests a resource.

IMPORTANT:

There is NO `Mine()` function.
There is NO `Chop()` function.
There is NO `Harvest()` function.

Trees and ores are BOTH collected using:

```lua
GameAPI.Gather(targetId)
```

This rule is intentionally important for compatibility testing.

---

### GameAPI.ReturnHome()

Commands the character to return to the home position.

---

### GameAPI.Wait(ticks)

Waits for the specified number of game ticks.

`ticks` must be an integer from 1 to 20.

---

### GameAPI.Log(text)

Writes text to the in-game script console.

This is optional and is intended for debugging.

---

## 6. Important execution rules

The script may use:

- local variables
- if / elseif / else
- while loops
- for loops
- ipairs
- pairs
- tables
- functions defined inside the script
- arithmetic
- comparisons
- boolean logic

The script must NOT assume that any helper functions exist unless the script defines them itself.

For example, this is INVALID:

```lua
local ore = GameAPI.FindNearest("copper_ore")
```

because `GameAPI.FindNearest()` does not exist.

If nearest-object logic is needed, write it in Lua using results from `GameAPI.Scan()`.

---

## 7. Safety behavior for this test

When generating an autonomous script, follow these rules unless the user explicitly asks for different behavior:

1. If HP falls below 30% of maximum HP, call `GameAPI.ReturnHome()` and stop the script.
2. If inventory is full, call `GameAPI.ReturnHome()` and stop the script.
3. Do not attack wolves unless the user explicitly requests it.
4. Slimes may be attacked when necessary.
5. Never use an undocumented GameAPI function.

---

## 8. Compatibility test task interpretation

If the user asks for a script that:

- searches for copper ore,
- gathers copper ore,
- attacks nearby slimes,
- avoids wolves,
- returns home below 30% HP,
- returns home when the inventory is full,

a compliant script should approximately follow this process:

1. Read player state.
2. Check HP.
3. Check inventory capacity.
4. Scan the surroundings.
5. Avoid attacking wolves.
6. If a slime is very close, attack it.
7. Find the nearest visible copper ore using Lua logic.
8. Move toward the copper ore.
9. Gather it using `GameAPI.Gather(targetId)`.
10. If no copper ore is visible, move to explore nearby coordinates.
11. Repeat.

The exact implementation may differ.

---

## 9. Output requirements for AI assistants

When the user is testing whether you can use this specification, respond with exactly these three sections:

### DOCUMENT_CHECK

Include:

- the exact RULE-MARKER from this document
- the specification version
- the name of the API used to collect BOTH trees and ores

### LUA_SCRIPT

Provide one complete Lua script in a fenced code block.

Do not use undocumented GameAPI functions.

### COMPLIANCE_CHECK

List:

- every GameAPI function used by the script
- whether any undocumented GameAPI function was used
- whether `os`, `io`, `require`, `package`, `debug`, `load`, `loadfile`, or `dofile` was used

---

End of specification.
