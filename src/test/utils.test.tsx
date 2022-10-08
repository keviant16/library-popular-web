import { handleStatusValue } from "../utils/Utils";

test('given status then expect to be Disponible, Indisponible, Reserver ', function () {
    expect(handleStatusValue("GONE")).toBe("Indisponible");
    expect(handleStatusValue("RESERVED")).toBe("Reserver");
    expect(handleStatusValue("")).toBe("Disponible");
});