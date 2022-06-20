import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className='w-full h-screen flex items-center justify-center'>
                <div style={{borderTopColor:"transparent"}}
                    class="w-16 h-16 border-4 border-slate-700 border-dotted rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loading;