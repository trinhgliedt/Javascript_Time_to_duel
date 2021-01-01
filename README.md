# Javascript_Time_to_duel
A showcase of Javascript OOP.

<h3>Unit Cards</h3>

| name             | cost  | power | resilience |
| ----------------:|:-----:| -----:| ---------: |
|  Red Belt Ninja   |  3     |  3     | 4          |
|  Black Belt Ninja  |  4     |  5     | 4          |

<h3>Effect Cards</h3>

name | cost | text | stat | magnitude
 --- | --- | --- | --- | ---
Hard Algorithm	| 2	| increase target's resilience by 3 | resilience | +3
Unhandled Promise Rejection | 1	| reduce target's resilience by 2 |	resilience	| -2
Pair Programming | 3	| increase target's power by 2	| power	| +2

<h3>The following scenario are played out:</h3>

 turn | action
 --- | ---
 1 | Make an instance of "Red Belt Ninja"
 1 | Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
 2 | Make an instance "Black Belt Ninja"
 2 | Make an instance of "Unhandled Promise Rejection" and play iton "Red Belt Ninja"
 3 | Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
 3 | "Red Belt Ninja" uses the attack method on "Black Belt Ninja"
