import { makeSprite, t } from "@replay/core";

export const Menu = makeSprite({
  render({ props, device }) {
    const { inputs } = device;

    if (inputs.pointer.justReleased || inputs.keysJustPressed[" "]) {
      props.start();
    }

    return [
      t.text({
        text: device.isTouchScreen
          ? "Tap to Start"
          : "Click or Space Bar to Start",
        color: "white",
        y: 100,
      }),
    ];
  },
});
