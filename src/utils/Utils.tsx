export const handleStatusChipColor = (status: string) => {
    if (status === "GONE") return "danger"
    if (status === "RESERVED") return "warning"
    return "success"

}
export const handleStatusValue = (status: string) => {
    if (status === "GONE") return "Indisponible"
    if (status === "RESERVED") return "Reserver"
    return "Disponible"
}

export const checkId = (changeId?: number, currentID?: number,) => {
    return changeId === currentID
}