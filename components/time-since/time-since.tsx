import dayjs from 'dayjs'; 
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/hr';

dayjs.extend(relativeTime);
dayjs.locale('hr');

export interface ITimeSince {
    creation: string,
}

const TimeSince: React.FC<ITimeSince> = ( time ) => {
    return (
        <>{dayjs(time.creation).startOf('seconds').fromNow()}</>
    );
}

export default TimeSince;