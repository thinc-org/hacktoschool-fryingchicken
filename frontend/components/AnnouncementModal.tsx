import { AnnouncementDetailDto } from '../models/Dto';
import { useAuth } from '../providers/AuthProvider';
interface props {
  setAnDetail: React.Dispatch<
    React.SetStateAction<AnnouncementDetailDto | undefined>
  >;
  data: AnnouncementDetailDto;
}

export default function AnnouncementModal({ data, setAnDetail }: props) {
  const { username, role } = useAuth();
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start flex-col justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{data.title}</h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex flex-col">
              <h4>{data.description}</h4>
              {(role === 'instructor' || role === 'admin') && (
                <div className="flex  w-3/4 mx-auto">readList</div>
              )}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  setAnDetail(undefined);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
