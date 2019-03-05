export class CounterService {
    activeToInactiveCount = 0;
    inactiveToActiveCount = 0;

    incrementActiveToInactiveCount() {
        this.activeToInactiveCount += 1;
        console.log('Active to Inactive Count: ' + this.activeToInactiveCount);
    }

    incrementInactiveToActiveCount() {
        this.inactiveToActiveCount += 1;
        console.log('Inactive to Active Count: ' + this.inactiveToActiveCount);
    }
}
