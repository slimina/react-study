import React from "react"

import ThemeContext from "../theme-context"

const ThemedBar=()=>{
    return(
        <ThemeContext.Consumer>
            {
                theme=>{//Consumer 返回函数表达式 参数就是provider值
                    return (
                        <div className="alert mt-5" style={{
                            backgroundColor:theme.bgColor,
                            color:theme.color,
                        }}>
                            样式区域
                            <button className={theme.classnames}>样式按钮</button>
                        </div>
                    )
                }
            }
        </ThemeContext.Consumer>
    )

}

export default ThemedBar