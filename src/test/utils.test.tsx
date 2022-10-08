import { handleStatusValue } from "../utils/Utils"

test("given status expect handleStatusValue to return Indisponible, Disponible, Reserver ", () => {
    expect(handleStatusValue("GONE")).toBe("Indisponible")
    expect(handleStatusValue("RESERVED")).toBe("Reserver")
    expect(handleStatusValue("")).toBe("Disponible")
})