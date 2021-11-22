
const ContentNav = ({ selected }) => {

    const content = [
        { name: 'Introduction' },
        { name: 'Subtitle' },
        { name: 'Subtitle' },
        { name: 'Subtitle' },
        { name: 'Subtitle' },
        { name: 'Subtitle' },
    ]



    return (
        <div className='text-xs'>
            <h5 className="font-semibold uppercase px-5 mb-3">Contents</h5>
            <div className=" p-0 border-gray-200 text-gray-500">
                {content.map((item, index) =>
                    <div key={index} className={`px-5 border-l-2 cursor-pointer py-1 ml-0 ${selected === index && 'border-primary text-black border-l-2'}`}>
                        <p className={`my-1`}>
                            {item.name}
                        </p>
                    </div>

                )}
            </div>
        </div>
    )
}

export default ContentNav
