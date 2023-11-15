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
      color: '#fdf38c',
      backgroundColor: '#413c26',
      content: '☘️Leafer-vue warn:',
    })
    colorInfo.forEach((item, index) => {
      logData.content += `%c${item?.content ?? ' '}`
      logData.css.push(
        `${item?.color ? `color:${item.color}` : ''}`
        + `${item?.backgroundColor ? `;background:${item.backgroundColor}` : ''}`
        + ';padding: 1.5px'
        + `${index === 0 ? ';border-top-left-radius: 3px; border-bottom-left-radius: 3px' : ''}`
        + `${index === colorInfo.length - 1 ? ';border-top-right-radius: 3px; border-bottom-right-radius: 3px' : ''}`,
      )
    })
    // eslint-disable-next-line no-console
    console.log(
      `${logData.content}`,
      ...logData.css,
    )
  }

  return {
    log,
  }
}
