interface colorInfo {
  color?: string
  content?: any
  backgroundColor?: string
}

interface LogDataType {
  content: string
  css: string[]
}
export function useLogger() {
  function log(colorInfo: colorInfo[]) {
    const logData: LogDataType = {
      content: '',
      css: [],
    }
    colorInfo.unshift({
      content: ' [Leafer-vue warn:] ',
      color: '#FFF',
    })
    colorInfo.forEach((item, index) => {
      logData.content += `%c${item?.content ?? ' '}`
      logData.css.push(
        `${item?.color ? `color:${item.color}` : ''}`
        + `${item?.backgroundColor ? `;background:${item.backgroundColor}` : ''}`
        + ';padding: 0px'
        + `${index === 0 ? ';border-top-left-radius: 25px; border-bottom-left-radius: 8px' : ''}`
        + `${index === colorInfo.length - 1 ? ';border-top-right-radius: 8px; border-bottom-right-radius: 8px' : ''}`,
      )
    })

    console.warn(
      `${logData.content}`,
      ...logData.css,
    )
  }

  return {
    log,
  }
}
