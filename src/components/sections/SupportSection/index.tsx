import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';
import * as React from 'react';
import { useState } from 'react';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Action from '../../atoms/Action';
import ChevronIcon from '../../svgs/chevron-right';

export default function SupportSection(props) {
  const cssId = props.elementId || null;
  const colors = props.colors || 'colors-a';
  const styles = props.styles || {};
  const sectionWidth = styles.self?.width || 'wide';
  const sectionHeight = styles.self?.height || 'auto';
  const sectionJustifyContent = styles.self?.justifyContent || 'center';
  const supportItems = props.items || [];
  const actions = props.actions || [];
  return (
    <div
      id={cssId}
      {...getDataAttrs(props)}
      className={classNames(
        'wa-component',
        'wa-component-section',
        'wa-component-support-section',
        colors,
        'flex',
        'flex-col',
        'justify-center',
        mapMinHeightStyles(sectionHeight),
        styles.self?.margin,
        styles.self?.padding || 'py-12 px-4',
        styles.self?.borderColor,
        styles.self?.borderStyle ? mapStyles({ borderStyle: styles.self?.borderStyle }) : 'border-none',
        styles.self?.borderRadius ? mapStyles({ borderRadius: styles.self?.borderRadius }) : null
      )}
      style={{
        borderWidth: styles.self?.borderWidth ? `${styles.self?.borderWidth}px` : null
      }}
    >
      <div className={classNames('flex', 'w-full', mapStyles({ justifyContent: sectionJustifyContent }))}>
        <div className={classNames('w-full', mapMaxWidthStyles(sectionWidth))}>
          <div className="flex flex-wrap">
            {(props.title || props.subtitle || props.content || actions.length > 0) && (
              <div className={classNames('w-full', { 'lg:w-1/3 lg:pr-3': supportItems.length > 0 })}>
                {props.title && (
                  <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {props.title}
                  </h2>
                )}
                {props.subtitle && (
                  <p
                    className={classNames(
                      'text-lg',
                      'sm:text-xl',
                      styles.subtitle ? mapStyles(styles.subtitle) : null,
                      {
                        'mt-2': props.title
                      }
                    )}
                    data-sb-field-path=".subtitle"
                  >
                    {props.subtitle}
                  </p>
                )}
                {props.content && (
                  <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames(
                      'wa-markdown',
                      'mt-3',
                      props?.styles?.content ? mapStyles(props?.styles?.content) : null
                    )}
                    data-sb-field-path=".content"
                  >
                    {props.content}
                  </Markdown>
                )}
                {actions.length > 0 && (
                  <div
                    className={classNames('overflow-x-hidden', {
                      'mt-6': props.title || props.subtitle
                    })}
                  >
                    <div
                      className={classNames(
                        'flex',
                        'flex-wrap',
                        'items-center',
                        '-mx-2',
                        styles.actions ? mapStyles(styles.actions) : null
                      )}
                      data-sb-field-path=".actions"
                    >
                      {actions.map((action, index) => (
                        <Action
                          key={index}
                          {...action}
                          className="mb-3 mx-2 lg:whitespace-nowrap"
                          data-sb-field-path={`.${index}`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            {supportItems.length > 0 && (
              <div
                className={classNames('w-full', {
                  'mt-12 lg:mt-0 lg:w-2/3 lg:pl-3': props.title || props.subtitle || actions.length > 0
                })}
                data-sb-field-path=".items"
              >
                {supportItems.map((item, index) => (
                  <SupportItem key={index} {...item} data-sb-field-path={`.${index}`} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportItem(props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className="wa-support-section-item border-b border-current pb-8 mb-8"
      data-sb-field-path={props['data-sb-field-path']}
    >
      {props.question && (
        <h3
          className={classNames(
            'flex',
            'items-center',
            'justify-between',
            'cursor-pointer',
            'text-2xl',
            props?.styles?.question ? mapStyles(props?.styles?.question) : null
          )}
          onClick={() => setIsActive(!isActive)}
        >
          <span data-sb-field-path=".question">{props.question}</span>
          <span className={classNames('ml-4', isActive ? 'transform rotate-90' : null)}>
            <ChevronIcon className="fill-current h-6 w-6" />
          </span>
        </h3>
      )}
      {props.answer && (
        <Markdown
          options={{ forceBlock: true, forceWrapper: true }}
          className={classNames(
            'wa-markdown',
            'mt-6',
            props?.styles?.answer ? mapStyles(props?.styles?.answer) : null,
            !isActive ? 'hidden' : null
          )}
          data-sb-field-path=".answer"
        >
          {props.answer}
        </Markdown>
      )}
    </div>
  );
}

function mapMinHeightStyles(height) {
  switch (height) {
    case 'screen':
      return 'min-h-screen';
  }
  return null;
}

function mapMaxWidthStyles(width) {
  switch (width) {
    case 'narrow':
      return 'max-w-screen-md';
    case 'wide':
      return 'max-w-screen-xl';
    case 'full':
      return 'max-w-full';
  }
  return null;
}
