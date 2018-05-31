import {
  trigger,
  animate,
  style,
  group,
  animateChild,
  query,
  stagger,
  transition,
  keyframes
} from "@angular/animations";

export const routerTransition = trigger("routerTransition", [
  transition("left => right", [
    /* order */
    /* 1 */ query(
      ":enter, :leave",
      style({ position: "fixed", width: "100%" }),
      { optional: true }
    ),
    /* 2 */ group([
      // block executes in parallel
      query(
        ":enter",
        [
          style({ transform: "translateX(100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateX(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(-100%)" }))
        ],
        { optional: true }
      )
    ])
  ]),

  transition("right => left", [
    /* order */
    /* 1 */ query(
      ":enter, :leave",
      style({ position: "fixed", width: "100%" }),
      { optional: true }
    ),
    /* 2 */ group([
      // block executes in parallel
      query(
        ":enter",
        [
          style({ transform: "translateX(-100%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(0%)" }))
        ],
        { optional: true }
      ),
      query(
        ":leave",
        [
          style({ transform: "translateX(0%)" }),
          animate("0.5s ease-in-out", style({ transform: "translateX(100%)" }))
        ],
        { optional: true }
      )
    ])
  ]),

  transition("* => up", [
    animate(
      "0.3s",
      keyframes([
        style({ opacity: 0, transform: "translate3d(0, -100%, 0)", offset: 0 }),
        style({ opacity: 1, transform: "translate3d(0, 0, 0)", offset: 1 })
      ])
    )
  ])
]);
