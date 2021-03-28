export const months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];

export const getWeekDay = () => {
    const date = new Date();
    return date.toLocaleDateString(window.navigator.language, {weekday: 'long'})
}

export const getDate = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    return {
        year,
        month,
        day
    }
}