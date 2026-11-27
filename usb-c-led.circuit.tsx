import { SmdUsbC } from "./components/SmdUsbC"

export default () => (
  <board
    width="36mm"
    height="20mm"
    minTraceToHoleEdgeClearance="0.2mm"
    minTraceToPadEdgeClearance="0.2mm"
    minViaEdgeToPadEdgeClearance="0.2mm"
    minViaHoleEdgeToViaHoleEdgeClearance="0.2mm"
  >
    <schematicsheet name="Main" displayName="USB-C LED">
      <SmdUsbC
        name="J1"
        pcbX="-10mm"
        pcbY="0mm"
        pcbRotation="-90deg"
        noConnect={["SBU1", "SBU2", "DP1", "DP2", "DM1", "DM2"]}
        pinAttributes={{
          VBUS1: { providesPower: true },
          GND1: { providesGround: true },
        }}
        connections={{
          VBUS1: "net.VBUS",
          VBUS2: "net.VBUS",
          VBUS_A9: "net.VBUS",
          VBUS_B4: "net.VBUS",
          GND1: "net.GND",
          GND2: "net.GND",
          GND_A12: "net.GND",
          GND_B1: "net.GND",
          CC1: "net.CC1",
          CC2: "net.CC2",
        }}
      />
      <resistor
        name="R1"
        resistance="5.1k"
        footprint="jlcpcb:C25905"
        cadModel="0402"
        supplierPartNumbers={{ jlcpcb: ["C25905"] }}
        pcbX="2mm"
        pcbY="5mm"
        connections={{ pin1: "net.CC1", pin2: "net.GND" }}
      />
      <resistor
        name="R2"
        resistance="5.1k"
        footprint="jlcpcb:C25905"
        cadModel="0402"
        supplierPartNumbers={{ jlcpcb: ["C25905"] }}
        pcbX="2mm"
        pcbY="2mm"
        connections={{ pin1: "net.CC2", pin2: "net.GND" }}
      />
      <capacitor
        name="C1"
        capacitance="10uF"
        footprint="jlcpcb:C15850"
        cadModel="0805"
        supplierPartNumbers={{ jlcpcb: ["C15850"] }}
        pcbX="8mm"
        pcbY="4mm"
        connections={{ pin1: "net.VBUS", pin2: "net.GND" }}
      />
      <capacitor
        name="C2"
        capacitance="100nF"
        footprint="jlcpcb:C1525"
        cadModel="0402"
        supplierPartNumbers={{ jlcpcb: ["C1525"] }}
        pcbX="8mm"
        pcbY="1mm"
        connections={{ pin1: "net.VBUS", pin2: "net.GND" }}
      />
      <resistor
        name="R3"
        resistance="470"
        footprint="jlcpcb:C23179"
        cadModel="0603"
        manufacturerPartNumber="0603WAF4700T5E"
        supplierPartNumbers={{ jlcpcb: ["C23179"] }}
        pcbX="2mm"
        pcbY="-5mm"
        connections={{ pin1: "net.VBUS", pin2: "net.LED" }}
      />
      <led
        name="D1"
        color="white"
        footprint="jlcpcb:C2290"
        cadModel="0603"
        manufacturerPartNumber="KT-0603W"
        supplierPartNumbers={{ jlcpcb: ["C2290"] }}
        pinLabels={{
          pin1: ["anode", "pos"],
          pin2: ["cathode", "neg"],
        }}
        pcbX="9mm"
        pcbY="-5mm"
        connections={{ anode: "net.LED", cathode: "net.GND" }}
      />
      <silkscreentext text="J1" pcbX="-15mm" pcbY="7.5mm" fontSize="0.9mm" />
      <silkscreentext text="R1" pcbX="2mm" pcbY="6.8mm" fontSize="0.8mm" />
      <silkscreentext text="R2" pcbX="4.6mm" pcbY="2mm" fontSize="0.8mm" />
      <silkscreentext text="C1" pcbX="8mm" pcbY="6.6mm" fontSize="0.8mm" />
      <silkscreentext text="C2" pcbX="10.6mm" pcbY="1mm" fontSize="0.8mm" />
      <silkscreentext text="R3" pcbX="2mm" pcbY="-7.4mm" fontSize="0.8mm" />
      <silkscreentext text="D1" pcbX="12.2mm" pcbY="-5mm" fontSize="0.8mm" />
    </schematicsheet>
  </board>
)
