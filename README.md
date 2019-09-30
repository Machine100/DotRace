# DotRace

This project is live at endpoint http://dotrace.s3-website-us-east-1.amazonaws.com/

2 players race to click all the dots on a grid.

Is a reactive webapp where changes by one player are shown in real time to the other player.

Uses Angular, Typescript, Firebase, Observables and Streams.

Working through general ideas of state management and control panels.

Issues to resolve: score tracker broken - when one side resets the board, the other side does not have their local-state score reset. This would need a locking pushbutton type control implemented at Firebase. Implement media-querry. Add instructions to page. The Play As button resets for one side during reset - turn this off. Add another player color. Clean up code to replace repetitive sections with iteration.
