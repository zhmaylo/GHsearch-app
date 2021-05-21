import { HISTORY_SEARCH } from "../../constants/actionConst";
import { SEARCH_HIST_KEY, SEARCH_HIST_LENGTH } from "../../constants/storageConst";
import { getData, storeData } from "../storage/storage";


// toStore - push history to storage
export const toStorage = async (indata: string, dispatch: any) => {
    if (indata.length==0) {return};
    let history = await fromStorage();
    (history.length >= SEARCH_HIST_LENGTH) && (history.shift());
    history.push(indata);
    await storeData(SEARCH_HIST_KEY, history);
    dispatch({ type: HISTORY_SEARCH, payload: history })
};

// fromStore -  pull history from storage
export const fromStorage = async () => {
    let history = await getData(SEARCH_HIST_KEY);
    (history == null) && (history = []);
    return history;
};

