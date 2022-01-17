import _ from 'lodash';

const idGenerator = () => _.uniqueId( `${new Date().getTime()}`.split("").reverse().join("") );
export default idGenerator;