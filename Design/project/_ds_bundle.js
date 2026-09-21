/* @ds-bundle: {"format":4,"namespace":"ArclightDesignSystem_6b18d9","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"cfa0e1ca3e28","components/core/Button.jsx":"23d7ce964a4a","components/core/Card.jsx":"64edaee942cd","components/core/IconButton.jsx":"cf814a57e084","components/core/Tag.jsx":"0985209c7cf2","components/feedback/Dialog.jsx":"809ad201ea27","components/feedback/Toast.jsx":"a44c922a195e","components/feedback/Tooltip.jsx":"376f9368244e","components/forms/Checkbox.jsx":"6f3b185777e5","components/forms/Input.jsx":"82bbcd18e37e","components/forms/Radio.jsx":"d48328c77f00","components/forms/Select.jsx":"60066d1668b8","components/forms/Switch.jsx":"7c1edf890761","components/navigation/Tabs.jsx":"0b64259ed3e6","ui_kits/marketing-site/CareersScreen.jsx":"761d11589460","ui_kits/marketing-site/Chrome.jsx":"fad8b6bd9abb","ui_kits/marketing-site/HomeScreen.jsx":"434e5dc15e17","ui_kits/marketing-site/InsightsScreen.jsx":"6f5452bd4ffe","ui_kits/marketing-site/JobDetailScreen.jsx":"67a9d01652b6","ui_kits/marketing-site/Mosaic.jsx":"957997c80aa1","ui_kits/marketing-site/ServicesScreen.jsx":"e31e19a424c4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ArclightDesignSystem_6b18d9 = window.ArclightDesignSystem_6b18d9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge(props) {
  const {
    children,
    tone = 'ink'
  } = props;
  const tones = {
    ink: {
      background: 'var(--ink-900)',
      color: 'var(--paper)'
    },
    violet: {
      background: 'var(--violet-100)',
      color: 'var(--violet-700)'
    },
    amber: {
      background: 'var(--amber-100)',
      color: 'var(--amber-600)'
    },
    teal: {
      background: 'var(--teal-100)',
      color: 'var(--teal-600)'
    },
    coral: {
      background: 'var(--coral-100)',
      color: 'var(--coral-600)'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-micro)',
      fontWeight: 600,
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      fontFamily: 'var(--font-display)',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button(props) {
  const {
    variant = 'primary',
    size = 'md',
    disabled,
    icon,
    children,
    onClick
  } = props;
  const pad = {
    sm: '8px 16px',
    md: '12px 22px',
    lg: '16px 30px'
  }[size];
  const fontSize = {
    sm: 'var(--text-small)',
    md: 'var(--text-body)',
    lg: 'var(--text-body-lg)'
  }[size];
  const base = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    borderRadius: 'var(--radius-md)',
    padding: pad,
    fontSize,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'var(--border-w) solid transparent',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), opacity var(--dur-fast)',
    opacity: disabled ? 0.45 : 1
  };
  const variants = {
    primary: {
      background: 'var(--ink-900)',
      color: 'var(--paper)'
    },
    accent: {
      background: 'var(--accent-primary)',
      color: 'var(--text-on-accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--ink-900)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-900)'
    }
  };
  const hovers = {
    primary: {
      background: 'var(--ink-700)'
    },
    accent: {
      background: 'var(--accent-primary-hover)'
    },
    secondary: {
      background: 'var(--surface-sunken)'
    },
    ghost: {
      background: 'var(--surface-sunken)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const style = {
    ...base,
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : {})
  };
  return React.createElement('button', {
    style,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, icon ? React.createElement('i', {
    className: `ph ph-${icon}`
  }) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card(props) {
  const {
    title,
    eyebrow,
    children,
    variant = 'bordered',
    accent,
    style: styleProp
  } = props;
  const variants = {
    bordered: {
      background: 'var(--surface-card)',
      border: 'var(--border-w) solid var(--border-subtle)',
      boxShadow: 'none'
    },
    elevated: {
      background: 'var(--surface-card)',
      border: 'none',
      boxShadow: 'var(--shadow-md)'
    },
    inverse: {
      background: 'var(--ink-900)',
      border: 'none',
      boxShadow: 'none',
      color: 'var(--paper)'
    }
  };
  return React.createElement('div', {
    style: {
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontFamily: 'var(--font-body)',
      borderTop: accent ? `4px solid ${accent}` : undefined,
      ...variants[variant],
      ...styleProp
    }
  }, eyebrow ? React.createElement('span', {
    style: {
      fontSize: 'var(--text-micro)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: variant === 'inverse' ? 'var(--ink-300)' : 'var(--text-muted)',
      fontWeight: 600
    }
  }, eyebrow) : null, title ? React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      fontWeight: 700,
      margin: 0,
      color: variant === 'inverse' ? 'var(--paper)' : 'var(--text-primary)'
    }
  }, title) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton(props) {
  const {
    icon = 'arrow-right',
    variant = 'ghost',
    size = 'md',
    disabled,
    onClick,
    'aria-label': label
  } = props;
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size];
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      background: hover ? 'var(--surface-sunken)' : 'transparent',
      color: 'var(--ink-900)',
      border: 'none'
    },
    outline: {
      background: hover ? 'var(--surface-sunken)' : 'transparent',
      color: 'var(--ink-900)',
      border: 'var(--border-w) solid var(--border-strong)'
    },
    inverse: {
      background: hover ? 'var(--ink-700)' : 'var(--ink-900)',
      color: 'var(--paper)',
      border: 'none'
    }
  };
  return React.createElement('button', {
    'aria-label': label,
    disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick,
    style: {
      width: dims,
      height: dims,
      borderRadius: 'var(--radius-md)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background var(--dur-fast) var(--ease-out)',
      fontSize: 18,
      ...variants[variant]
    }
  }, React.createElement('i', {
    className: `ph ph-${icon}`
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag(props) {
  const {
    children,
    onRemove
  } = props;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 10px',
      borderRadius: 'var(--radius-sm)',
      border: 'var(--border-w) solid var(--border-subtle)',
      fontSize: 'var(--text-small)',
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-secondary)',
      background: 'var(--surface-sunken)'
    }
  }, children, onRemove ? React.createElement('i', {
    className: 'ph ph-x',
    style: {
      cursor: 'pointer',
      fontSize: 12
    },
    onClick: onRemove
  }) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog(props) {
  const {
    open,
    title,
    children,
    onClose,
    footer
  } = props;
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(22,22,22,0.6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    },
    onClick: onClose
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      width: 460,
      maxWidth: '90vw',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      margin: 0,
      fontWeight: 700
    }
  }, title), React.createElement('i', {
    className: 'ph ph-x',
    style: {
      cursor: 'pointer',
      fontSize: 20
    },
    onClick: onClose
  })), React.createElement('div', {
    style: {
      color: 'var(--text-secondary)',
      lineHeight: 'var(--lh-normal)'
    }
  }, children), footer ? React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      marginTop: 8
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast(props) {
  const {
    tone = 'ink',
    icon,
    children
  } = props;
  const tones = {
    ink: {
      background: 'var(--ink-900)',
      color: 'var(--paper)'
    },
    teal: {
      background: 'var(--teal-500)',
      color: 'var(--white)'
    },
    coral: {
      background: 'var(--coral-500)',
      color: 'var(--white)'
    }
  };
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 18px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-small)',
      ...tones[tone]
    }
  }, icon ? React.createElement('i', {
    className: `ph ph-${icon}`
  }) : null, children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip(props) {
  const {
    label,
    children
  } = props;
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show ? React.createElement('span', {
    style: {
      position: 'absolute',
      bottom: '120%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--ink-900)',
      color: 'var(--paper)',
      fontSize: 'var(--text-micro)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-body)',
      boxShadow: 'var(--shadow-md)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox(props) {
  const {
    label,
    checked,
    onChange,
    disabled
  } = props;
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement('span', {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-sm)',
      border: `var(--border-w) solid ${checked ? 'var(--ink-900)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--ink-900)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast)'
    }
  }, checked ? React.createElement('i', {
    className: 'ph ph-check',
    style: {
      color: 'var(--paper)',
      fontSize: 13
    }
  }) : null), React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    disabled,
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input(props) {
  const {
    label,
    placeholder,
    type = 'text',
    error,
    disabled,
    value,
    onChange
  } = props;
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label ? React.createElement('span', {
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--text-secondary)',
      fontWeight: 500
    }
  }, label) : null, React.createElement('input', {
    type,
    placeholder,
    disabled,
    value,
    onChange,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      padding: '11px 14px',
      borderRadius: 'var(--radius-sm)',
      border: `var(--border-w) solid ${error ? 'var(--coral-600)' : focus ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
      outline: 'none',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: 'var(--text-primary)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }), error ? React.createElement('span', {
    style: {
      fontSize: 'var(--text-micro)',
      color: 'var(--coral-600)'
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio(props) {
  const {
    label,
    checked,
    onChange,
    name,
    disabled
  } = props;
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement('span', {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: `var(--border-w) solid ${checked ? 'var(--ink-900)' : 'var(--border-strong)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked ? React.createElement('span', {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--ink-900)'
    }
  }) : null), React.createElement('input', {
    type: 'radio',
    name,
    checked,
    onChange,
    disabled,
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select(props) {
  const {
    label,
    options = [],
    value,
    onChange,
    disabled
  } = props;
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label ? React.createElement('span', {
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--text-secondary)',
      fontWeight: 500
    }
  }, label) : null, React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, React.createElement('select', {
    value,
    onChange,
    disabled,
    style: {
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      padding: '11px 14px',
      appearance: 'none',
      borderRadius: 'var(--radius-sm)',
      border: 'var(--border-w) solid var(--border-subtle)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: 'var(--text-primary)',
      outline: 'none'
    }
  }, options.map((o, i) => React.createElement('option', {
    key: i,
    value: o.value ?? o
  }, o.label ?? o))), React.createElement('i', {
    className: 'ph ph-caret-down',
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-secondary)'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch(props) {
  const {
    checked,
    onChange,
    disabled,
    label
  } = props;
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-primary)'
    }
  }, React.createElement('span', {
    style: {
      width: 40,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent-primary)' : 'var(--ink-200)',
      position: 'relative',
      transition: 'background var(--dur-normal) var(--ease-out)',
      flexShrink: 0
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--white)',
      transition: 'left var(--dur-normal) var(--ease-out)',
      boxShadow: 'var(--shadow-sm)'
    }
  })), React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    disabled,
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs(props) {
  const {
    items = [],
    active,
    onChange
  } = props;
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: 'var(--border-w) solid var(--border-subtle)',
      fontFamily: 'var(--font-display)'
    }
  }, items.map((it, i) => {
    const isActive = (active ?? 0) === i;
    return React.createElement('button', {
      key: i,
      onClick: () => onChange && onChange(i),
      style: {
        background: 'none',
        border: 'none',
        padding: '12px 2px',
        fontSize: 'var(--text-body)',
        fontWeight: 600,
        color: isActive ? 'var(--ink-900)' : 'var(--text-muted)',
        cursor: 'pointer',
        position: 'relative',
        borderBottom: isActive ? '2px solid var(--accent-primary)' : '2px solid transparent',
        marginBottom: -1.5,
        transition: 'color var(--dur-fast)'
      }
    }, it);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/CareersScreen.jsx
try { (() => {
const JOBS = [{
  id: 'JO-DEU-1996',
  title: '(Junior) Consultant Marketing Automation – Microsoft Dynamics 365 (m/w/d)',
  city: 'München',
  area: 'Consulting'
}, {
  id: 'JO-DEU-2041',
  title: 'Senior Cloud Engineer – AWS (m/w/d)',
  city: 'Berlin',
  area: 'Engineering'
}, {
  id: 'JO-DEU-1877',
  title: 'UX Designer – Digital Commerce (m/w/d)',
  city: 'Hamburg',
  area: 'Design'
}, {
  id: 'JO-DEU-2103',
  title: 'Data Engineer – Analytics Platforms (m/w/d)',
  city: 'München',
  area: 'Engineering'
}, {
  id: 'JO-DEU-1954',
  title: 'Consultant Cybersecurity (m/w/d)',
  city: 'Frankfurt',
  area: 'Consulting'
}];
function CareersScreen({
  Card,
  Select,
  Input,
  Tag,
  onOpenJob
}) {
  return React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-7) var(--gutter)'
    }
  }, React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      fontWeight: 800,
      margin: '0 0 20px'
    }
  }, 'Offene Stellen'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 20,
      maxWidth: 640
    }
  }, React.createElement(Input, {
    placeholder: 'Suche nach Titel oder Stichwort'
  }), React.createElement(Select, {
    options: ['Alle Standorte', 'München', 'Berlin', 'Hamburg', 'Frankfurt']
  })), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 24
    }
  }, React.createElement(Tag, {
    onRemove: () => {}
  }, 'Consulting'), React.createElement(Tag, {
    onRemove: () => {}
  }, 'München')), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, JOBS.map(j => React.createElement(Card, {
    key: j.id,
    variant: 'bordered',
    style: {
      cursor: 'pointer',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    onClick: () => onOpenJob(j)
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-body-lg)',
      marginBottom: 4
    }
  }, j.title), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-small)',
      color: 'var(--text-muted)'
    }
  }, `${j.id} · ${j.city} · ${j.area}`)), React.createElement('i', {
    className: 'ph ph-arrow-right',
    style: {
      fontSize: 20,
      color: 'var(--text-secondary)'
    }
  })))));
}
Object.assign(window, {
  CareersScreen,
  JOBS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/CareersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Chrome.jsx
try { (() => {
function SiteHeader({
  active
}) {
  const items = ['Services', 'Industries', 'Insights & Labs', 'We are', 'Careers'];
  return React.createElement('header', {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px var(--gutter)',
      background: 'rgba(253,253,250,0.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: 'var(--border-w) solid var(--border-subtle)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: 'var(--ls-tight)'
    }
  }, 'Arclight'), React.createElement('nav', {
    style: {
      display: 'flex',
      gap: 28,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-small)',
      fontWeight: 500
    }
  }, items.map(it => React.createElement('span', {
    key: it,
    style: {
      color: it === active ? 'var(--ink-900)' : 'var(--text-secondary)',
      cursor: 'pointer',
      fontWeight: it === active ? 700 : 500
    }
  }, it))), React.createElement('button', {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--paper)',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '10px 18px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer'
    }
  }, 'Kontakt'));
}
function SiteFooter() {
  const cols = [{
    h: 'Services',
    items: ['Artificial Intelligence', 'Cloud Computing', 'Cybersecurity', 'Data World', 'CX & Digital Commerce']
  }, {
    h: 'Industries',
    items: ['Automotive & Manufacturing', 'Financial Services', 'Retail & Consumer Products', 'Telco & Media']
  }, {
    h: 'We are',
    items: ['Company Profile', 'Offices', 'Newsroom', 'Investors']
  }, {
    h: 'Careers',
    items: ['Job Search', 'Life at Arclight', 'Graduate Programs']
  }];
  return React.createElement('footer', {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--paper)',
      padding: 'var(--space-8) var(--gutter)',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 32,
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, cols.map(c => React.createElement('div', {
    key: c.h
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--ink-300)',
      marginBottom: 14
    }
  }, c.h), c.items.map(it => React.createElement('div', {
    key: it,
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--ink-200)',
      marginBottom: 10,
      cursor: 'pointer'
    }
  }, it))))), React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '48px auto 0',
      paddingTop: 24,
      borderTop: '1px solid var(--ink-700)',
      fontSize: 'var(--text-micro)',
      color: 'var(--ink-400)'
    }
  }, 'Arclight © 2026 — fictional demonstration brand, not affiliated with any real company.'));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/HomeScreen.jsx
try { (() => {
function HomeScreen({
  Button,
  Card,
  Badge,
  IconButton,
  Mosaic,
  onNavigate
}) {
  const services = [{
    t: 'Artificial Intelligence',
    d: 'Von Piloten zu produktiven Agenten.',
    a: 'var(--violet-500)'
  }, {
    t: 'Cloud Computing',
    d: 'Migration, Betrieb, Skalierung.',
    a: 'var(--teal-500)'
  }, {
    t: 'Cybersecurity',
    d: 'Schutz für kritische Systeme.',
    a: 'var(--coral-500)'
  }, {
    t: 'Data World',
    d: 'Von Rohdaten zu Entscheidungen.',
    a: 'var(--amber-500)'
  }];
  return React.createElement('div', null, React.createElement('section', {
    style: {
      padding: 'var(--space-9) var(--gutter) var(--space-8)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, React.createElement(Badge, {
    tone: 'violet'
  }, 'Digital Consulting'), React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-1)',
      fontWeight: 800,
      letterSpacing: 'var(--ls-tight)',
      lineHeight: 'var(--lh-tight)',
      margin: '20px 0 24px',
      maxWidth: 820
    }
  }, 'Wir bauen, was als Nächstes kommt.'), React.createElement('p', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-lg)',
      color: 'var(--text-secondary)',
      maxWidth: 560,
      lineHeight: 'var(--lh-relaxed)',
      margin: '0 0 32px'
    }
  }, 'Beratung, System-Integration und digitale Services für Unternehmen, die schneller wachsen wollen als ihr Bestand es erlaubt.'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 14
    }
  }, React.createElement(Button, {
    variant: 'accent',
    icon: 'arrow-right',
    onClick: () => onNavigate('services')
  }, 'Leistungen entdecken'), React.createElement(Button, {
    variant: 'secondary',
    onClick: () => onNavigate('careers')
  }, 'Karriere'))), React.createElement(Mosaic, {
    height: 160
  }), React.createElement('section', {
    style: {
      padding: 'var(--space-8) var(--gutter)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-micro)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      fontWeight: 700,
      marginBottom: 20
    }
  }, 'Services'), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, services.map(s => React.createElement(Card, {
    key: s.t,
    eyebrow: 'Service',
    title: s.t,
    accent: s.a,
    style: {
      cursor: 'pointer'
    },
    onClick: () => onNavigate('services')
  }, s.d)))), React.createElement('section', {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--paper)',
      padding: 'var(--space-8) var(--gutter)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24,
      textAlign: 'center'
    }
  }, [['+2,1 Mrd. €', 'Umsatz 2025'], ['14.798', 'Mitarbeitende'], ['30', 'Jahre am Markt'], ['20+', 'Länder']].map(([n, l]) => React.createElement('div', {
    key: l
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      fontWeight: 800,
      color: 'var(--amber-500)'
    }
  }, n), React.createElement('div', {
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--ink-300)',
      marginTop: 6
    }
  }, l))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/InsightsScreen.jsx
try { (() => {
function InsightsScreen({
  Card,
  Badge
}) {
  const articles = [{
    t: 'Scaling AI in 2026',
    d: 'Wie Unternehmen KI vom Pilot in die Fläche bringen.',
    tag: 'AI',
    tone: 'violet'
  }, {
    t: 'AI for Retailers',
    d: 'Agentische Systeme im Handel — vom Regal bis zur Kasse.',
    tag: 'Retail',
    tone: 'amber'
  }, {
    t: 'Industrial Agentic AI',
    d: 'Skalierung agentischer KI in der Fertigung.',
    tag: 'Manufacturing',
    tone: 'teal'
  }];
  return React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-7) var(--gutter)'
    }
  }, React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      fontWeight: 800,
      margin: '0 0 20px'
    }
  }, 'Insights & Labs'), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, articles.map(a => React.createElement(Card, {
    key: a.t,
    variant: 'elevated',
    title: a.t
  }, a.d, React.createElement('div', {
    style: {
      marginTop: 4
    }
  }, React.createElement(Badge, {
    tone: a.tone
  }, a.tag))))));
}
Object.assign(window, {
  InsightsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/InsightsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/JobDetailScreen.jsx
try { (() => {
function JobDetailScreen({
  job,
  Button,
  Badge,
  Dialog,
  onBack
}) {
  const [open, setOpen] = React.useState(false);
  if (!job) return null;
  return React.createElement('div', {
    style: {
      maxWidth: 780,
      margin: '0 auto',
      padding: 'var(--space-7) var(--gutter)'
    }
  }, React.createElement('div', {
    onClick: onBack,
    style: {
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-small)',
      marginBottom: 20,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, React.createElement('i', {
    className: 'ph ph-arrow-left'
  }), 'Zurück zu offenen Stellen'), React.createElement(Badge, {
    tone: 'violet'
  }, job.area), React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      fontWeight: 800,
      margin: '16px 0 12px'
    }
  }, job.title), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-small)',
      color: 'var(--text-muted)',
      marginBottom: 28
    }
  }, `${job.id} · ${job.city}, Deutschland · Vollzeit`), React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h4)'
    }
  }, 'Deine Aufgaben'), React.createElement('ul', {
    style: {
      color: 'var(--text-secondary)',
      lineHeight: 'var(--lh-relaxed)',
      paddingLeft: 20
    }
  }, React.createElement('li', null, 'Konzeption und Umsetzung von Marketing-Automation-Kampagnen auf Basis von Microsoft Dynamics 365.'), React.createElement('li', null, 'Beratung unserer Kunden zu CRM- und Automatisierungsprozessen.'), React.createElement('li', null, 'Enge Zusammenarbeit mit Sales- und Data-Teams.')), React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h4)'
    }
  }, 'Dein Profil'), React.createElement('ul', {
    style: {
      color: 'var(--text-secondary)',
      lineHeight: 'var(--lh-relaxed)',
      paddingLeft: 20,
      marginBottom: 28
    }
  }, React.createElement('li', null, 'Erfahrung mit Microsoft Dynamics 365 oder vergleichbaren CRM-Systemen.'), React.createElement('li', null, 'Sehr gute Deutsch- und Englischkenntnisse.')), React.createElement(Button, {
    variant: 'accent',
    size: 'lg',
    onClick: () => setOpen(true)
  }, 'Jetzt bewerben'), React.createElement(Dialog, {
    open,
    onClose: () => setOpen(false),
    title: 'Bewerbung senden',
    footer: React.createElement(Button, {
      variant: 'accent',
      onClick: () => setOpen(false)
    }, 'Absenden')
  }, `Lade deinen Lebenslauf hoch, um dich auf ${job.id} zu bewerben.`));
}
Object.assign(window, {
  JobDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/JobDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Mosaic.jsx
try { (() => {
function Mosaic({
  height = 220
}) {
  const tiles = new Array(32).fill(0).map((_, i) => {
    const cyc = i % 8;
    const color = cyc === 0 ? 'var(--surface-mosaic-a)' : cyc === 2 ? 'var(--surface-mosaic-b)' : cyc === 4 ? 'var(--surface-mosaic-c)' : cyc === 6 ? 'var(--surface-mosaic-d)' : 'var(--surface-mosaic-e)';
    return React.createElement('div', {
      key: i,
      style: {
        background: color
      }
    });
  });
  return React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(8,1fr)',
      height
    }
  }, tiles);
}
Object.assign(window, {
  Mosaic
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Mosaic.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ServicesScreen.jsx
try { (() => {
function ServicesScreen({
  Card,
  Tabs,
  Badge
}) {
  const [tab, setTab] = React.useState(0);
  const services = [{
    t: 'Artificial Intelligence',
    d: 'Agentische KI, LLM-Integration und produktionsreife ML-Pipelines.',
    a: 'var(--violet-500)',
    tone: 'violet'
  }, {
    t: 'Cloud Computing',
    d: 'Migration, FinOps und Betrieb über alle Hyperscaler.',
    a: 'var(--teal-500)',
    tone: 'teal'
  }, {
    t: 'Cybersecurity',
    d: 'Bedrohungsanalyse, Zero-Trust-Architektur, Incident Response.',
    a: 'var(--coral-500)',
    tone: 'coral'
  }, {
    t: 'Data World',
    d: 'Data Platforms, Governance und Analytics an einem Ort.',
    a: 'var(--amber-500)',
    tone: 'amber'
  }, {
    t: 'CX & Digital Commerce',
    d: 'Commerce-Plattformen und Customer-Experience-Design.',
    a: 'var(--violet-500)',
    tone: 'violet'
  }, {
    t: 'Supply Chain Management',
    d: 'Resiliente, transparente Lieferketten.',
    a: 'var(--teal-500)',
    tone: 'teal'
  }];
  return React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-7) var(--gutter)'
    }
  }, React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      fontWeight: 800,
      margin: '0 0 20px'
    }
  }, 'Services'), React.createElement(Tabs, {
    items: ['Alle', 'Technology', 'Strategy', 'Experience'],
    active: tab,
    onChange: setTab
  }), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      marginTop: 28
    }
  }, services.map(s => React.createElement(Card, {
    key: s.t,
    title: s.t,
    accent: s.a
  }, s.d, React.createElement('div', {
    style: {
      marginTop: 8
    }
  }, React.createElement(Badge, {
    tone: s.tone
  }, 'Reply-genre service'))))));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
