
const ContentNav = ({ hidden, selected, nestedHeadings }) => {
    return (
        <nav aria-label="Table of Contents" style={{}} className={`text-xs w-52 max-h-screen overflow-y-auto sticky top-6 mt-12 `}>
            <h5 className="font-semibold uppercase px-5 mb-3">Contents</h5>
            <div className=" p-0 border-gray-200 text-gray-500">
                {nestedHeadings?.map((item, index) =>
                    <div key={index} className={`px-5 border-l-2 cursor-pointer py-1 ml-0 ${selected === index && 'border-primary text-black border-l-2'}`}>
                        <p className={`my-1`}>
                            {item.title}
                        </p>
                    </div>

                )}
            </div>
        </nav>
    )
}

export default ContentNav
