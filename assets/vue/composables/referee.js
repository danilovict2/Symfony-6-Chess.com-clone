import BishopReferee from "./referees/BishopReferee.js";
import KnightReferee from "./referees/KnightReferee.js";
import PawnReferee from "./referees/PawnReferee.js";

export default function useReferee() {
    function createRefereeForType(type) {
        switch (type) {
            case 'Pawn':
                return new PawnReferee();
            case 'Knight':
                return new KnightReferee();
            case 'Bishop':
                return new BishopReferee();
            default:
                throw new Error('Invalid type');
        }
    }

    return { createRefereeForType }
}