export function dateFormatter(date: Date): string {
    return date.toLocaleTimeString('da-DK', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}